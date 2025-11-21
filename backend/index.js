const express=require('express');
const {router}=require('./routes/posts');
const app=express();
app.use(express.json());
app.use('/api/posts',router);
app.listen(4000,()=>console.log('Server running'));