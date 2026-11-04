const base='http://127.0.0.1:4318';
const queue=['/src/app.mjs','/styles.css','/feeding.css','/node_modules/phaser/dist/phaser.min.js'];
const seen=new Set();
while(queue.length){
  const path=queue.shift();if(seen.has(path))continue;seen.add(path);
  const response=await fetch(base+path);console.log(response.status,path);
  if(!response.ok){process.exitCode=1;continue;}
  if(path.endsWith('.mjs')){
    const source=await response.text();
    for(const match of source.matchAll(/from\s+['"]([^'"]+)['"]/g)){
      const url=new URL(match[1],base+path);
      if(url.origin!==base)throw new Error('Unexpected external module');
      queue.push(url.pathname);
    }
  }
}
console.log('Checked resources:',seen.size);
