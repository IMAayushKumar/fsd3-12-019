import express from 'express'
import path from 'path'
import { fileURLToPath } from 'nodeurl';
const app=express();

const urlPath=fileURLToPath(import.meta.url);
const rootFolder=path.dirname(urlPath)

app.use(express.static(path.join(rootFolder,"Pages")));

app.listen(4444,()=>{console.log("Prg 3 is running at 4444")})