const express=require('express');
const router=express.Router();

router.route('/')
.all('',(req,res)=>{
    res.contentType('text/html');
    res.statusCode=200;
    next();
})
.get(()=>{
    res.end('You have requested GET operation on Route 2 Page');
});