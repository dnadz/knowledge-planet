import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd(); const port=Number(process.env.PORT||4318);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.json':'application/json; charset=utf-8'};
http.createServer(async(req,res)=>{
  try {
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const allowed=pathname==='/'||pathname==='/index.html'||pathname==='/styles.css'||pathname==='/feeding.css'||pathname==='/assets/ocean-creatures-v1.png'||pathname==='/assets/reef-background-v1.png'||pathname==='/assets/answer-fish-v1.png'||pathname==='/assets/stage-backgrounds-v1.png'||pathname==='/assets/guardians-v1.png'||/^\/src\/[a-z0-9-]+\.mjs$/.test(pathname)||pathname==='/node_modules/phaser/dist/phaser.min.js';
    if(!allowed){res.writeHead(404);return res.end('Not found');}
    const file=path.join(root,pathname==='/'?'index.html':pathname);
    const content=await readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});res.end(content);
  }catch{res.writeHead(404);res.end('Not found');}
}).listen(port,'127.0.0.1',()=>console.log(`Knowledge Planet: http://127.0.0.1:${port}`));
