const express = require('express');
const router = express.Router();
let posts = [];
router.get('/',(req,res)=>res.json(posts));
router.post('/',(req,res)=>{
 const post={id:Date.now().toString(),...req.body};
 posts.push(post);res.status(201).json(post);
});
router.put('/:id',(req,res)=>{
 const i=posts.findIndex(p=>p.id===req.params.id);
 if(i<0)return res.sendStatus(404);
 posts[i]={...posts[i],...req.body};
 res.json(posts[i]);
});
router.delete('/:id',(req,res)=>{
 const i=posts.findIndex(p=>p.id===req.params.id);
 if(i<0)return res.sendStatus(404);
 const [removed]=posts.splice(i,1);
 res.json(removed);
});
module.exports={router,posts};