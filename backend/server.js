const express = require('express');
const app = express();
app.use(express.json());
let posts = [];
app.get('/api/posts', (req,res)=>res.json(posts));
app.post('/api/posts',(req,res)=>{
  const post = { id: Date.now().toString(), ...req.body };
  posts.push(post);
  res.status(201).json(post);
});
app.listen(4000,()=>console.log('API on 4000'));