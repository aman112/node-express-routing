const express=require('express');
const http=require('http');
const propertiesReader=require('properties-reader');
const properties=propertiesReader('config.properties');
const hostname=properties.get('hostname');
const port=properties.get('port');

const app=express();

const server=http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server is running at ${hostname}:${port}`);
})