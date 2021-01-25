const express=require('express');
const http=require('http');
const bodyParser=require('body-parser');
const propertiesReader=require('properties-reader');
const properties=propertiesReader('config.properties');
const hostname=properties.get('hostname');
const port=properties.get('port');

const route1Router=require('./routes/route1');
const route2Router=require('./routes/route2');

const app=express();
app.use(bodyParser.json());
app.use('/route1',route1Router);
app.use('/route2',route2Router);


const server=http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
});