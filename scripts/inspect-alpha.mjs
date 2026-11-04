import fs from 'node:fs';
import {inflateSync} from 'node:zlib';
const paeth=(a,b,c)=>{const p=a+b-c,da=Math.abs(p-a),db=Math.abs(p-b),dc=Math.abs(p-c);return da<=db&&da<=dc?a:db<=dc?b:c;};
for(const path of process.argv.slice(2)){
  const bytes=fs.readFileSync(path),width=bytes.readUInt32BE(16),height=bytes.readUInt32BE(20),type=bytes[25],chunks=[];
  if(type!==6||bytes[24]!==8||bytes[28]!==0){console.log({path,width,height,type,alpha:'unsupported or no alpha'});continue;}
  for(let at=8;at<bytes.length;){const n=bytes.readUInt32BE(at),name=bytes.toString('ascii',at+4,at+8);if(name==='IDAT')chunks.push(bytes.subarray(at+8,at+8+n));at+=n+12;}
  const raw=inflateSync(Buffer.concat(chunks)),stride=width*4;let previous=Buffer.alloc(stride),offset=0,min=255,max=0,transparent=0;
  for(let y=0;y<height;y++){
    const filter=raw[offset++],row=Buffer.from(raw.subarray(offset,offset+stride));offset+=stride;
    for(let x=0;x<stride;x++){const a=x>=4?row[x-4]:0,b=previous[x],c=x>=4?previous[x-4]:0;row[x]=(row[x]+(filter===1?a:filter===2?b:filter===3?Math.floor((a+b)/2):filter===4?paeth(a,b,c):0))&255;}
    for(let x=3;x<stride;x+=4){min=Math.min(min,row[x]);max=Math.max(max,row[x]);if(row[x]===0)transparent++;}
    previous=row;
  }
  console.log({path,width,height,minAlpha:min,maxAlpha:max,transparentFraction:transparent/(width*height)});
}
