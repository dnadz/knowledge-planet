# 知识星球 · 海洋远航

Windows 用户下载 [KnowledgePlanet.exe](windows/KnowledgePlanet.exe?raw=true) 后双击。程序在本机启动游戏，并用默认浏览器打开 http://127.0.0.1:4339/ 。需要 Windows 上的 .NET Framework 4.5 或以上，无需另装 Node.js。浏览器存档留在本机，同一浏览器与地址可读取已有记录。若旧版服务占用了 4339，关闭旧服务后重新打开 EXE。退出可在任务管理器结束 KnowledgePlanet.exe。此版本为未签名的离线试玩版。

所含第三方题目仅供非商业试玩，见 [第三方说明](THIRD_PARTY_NOTICES.md)。

开发时运行 npm ci 和 npm start。Windows 下用 Windows PowerShell 执行 desktop/build.ps1 构建单文件 EXE，输出到 test-output/windows。运行 npm test 执行自动测试。
