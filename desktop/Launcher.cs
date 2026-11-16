using System;
using System.IO;
using System.IO.Compression;
using System.Net;
using System.Net.Sockets;
using System.Diagnostics;
using System.Reflection;
using System.Windows.Forms;
using System.Collections.Generic;
using System.Text;
using System.Threading;

static class Launcher {
    [STAThread]
    static void Main(string[] args) {
        try {
            var files = new Dictionary<string, byte[]>(StringComparer.Ordinal);
            using (var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("game.zip"))
            using (var zip = new ZipArchive(stream, ZipArchiveMode.Read))
                foreach (var entry in zip.Entries)
                    using (var content = entry.Open())
                    using (var buffer = new MemoryStream()) {
                        content.CopyTo(buffer);
                        files.Add("/" + entry.FullName, buffer.ToArray());
                    }

            var server = new TcpListener(IPAddress.Loopback, 4339);
            server.Start();
            if (Array.IndexOf(args, "--no-browser") < 0) Process.Start("http://127.0.0.1:4339/");
            while (true) {
                var client = server.AcceptTcpClient();
                ThreadPool.QueueUserWorkItem(_ => Serve(client, files));
            }
        } catch (Exception e) {
            if (Array.IndexOf(args, "--no-browser") < 0)
                MessageBox.Show("Cannot start Knowledge Planet. Check port 4339.\n\n" + e.Message, "Knowledge Planet");
            Environment.ExitCode = 1;
        }
    }

    static void Serve(TcpClient client, Dictionary<string, byte[]> files) {
        using (client) {
            try {
                client.ReceiveTimeout = 3000;
                client.SendTimeout = 5000;
                using (var stream = client.GetStream()) {
                    var header = new StringBuilder();
                    while (header.Length < 8192) {
                        int value = stream.ReadByte();
                        if (value < 0) return;
                        header.Append((char)value);
                        int n = header.Length;
                        if (n >= 4 && header[n-4]=='\r' && header[n-3]=='\n' && header[n-2]=='\r' && header[n-1]=='\n') break;
                    }
                    string[] request = header.ToString().Split('\n')[0].TrimEnd('\r').Split(' ');
                    if (request.Length != 3 || (request[0] != "GET" && request[0] != "HEAD")) return;
                    string path = request[1].Split('?')[0];
                    if (path == "/") path = "/index.html";
                    byte[] body;
                    bool found = files.TryGetValue(path, out body);
                    if (!found) body = new byte[0];
                    string type;
                    switch (Path.GetExtension(path)) {
                        case ".png": type = "image/png"; break;
                        case ".css": type = "text/css; charset=utf-8"; break;
                        case ".html": type = "text/html; charset=utf-8"; break;
                        default: type = "text/javascript; charset=utf-8"; break;
                    }
                    byte[] response = Encoding.ASCII.GetBytes("HTTP/1.1 " + (found ? "200 OK" : "404 Not Found") +
                        "\r\nContent-Type: " + type + "\r\nContent-Length: " + body.Length +
                        "\r\nCache-Control: no-cache\r\nX-Content-Type-Options: nosniff\r\nConnection: close\r\n\r\n");
                    stream.Write(response, 0, response.Length);
                    if (request[0] == "GET") stream.Write(body, 0, body.Length);
                }
            } catch (IOException) {} catch (SocketException) {}
        }
    }
}
