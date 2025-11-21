import React,{useEffect,useState} from 'react';
const API='/api/posts';
export default function PostsPage(){
 const [posts,setPosts]=useState([]);
 const [title,setTitle]=useState('');
 const [content,setContent]=useState('');
 useEffect(()=>{fetch(API).then(r=>r.json()).then(setPosts);},[]);
 const createPost=e=>{
  e.preventDefault();
  fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,content})})
   .then(r=>r.json()).then(p=>{setPosts([...posts,p]);setTitle('');setContent('');});
 };
 return (
  <div>
   <form onSubmit={createPost}>
    <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" />
    <textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="Content" />
    <button type="submit">Add Post</button>
   </form>
   <ul>
    {posts.map(p=>(<li key={p.id}><h3>{p.title}</h3><p>{p.content}</p></li>))}
   </ul>
  </div>
 );
}