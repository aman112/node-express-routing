const express=require('express');
const http=require('http');
const propertiesReader=require('properties-reader');
const properties=propertiesReader('config.properties');
const hostname=properties.hostname;
const portname=properties.port;

const app=express();

const server=http.createServer(app);