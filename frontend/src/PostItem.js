import React,{useState} from 'react';
const API='/api/posts';
export default function PostItem({post,onChange,onRemove}){
 const [editing,setEditing]=useState(false);
 const [title,setTitle]=useState(post.title);
 const [content,setContent]=useState(post.content);
 const save=()=>{
  fetch(`${API}/${post.id}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,content})})
   .then(r=>r.json()).then(onChange);
  setEditing(false);
 };
 const del=()=>{
  fetch(`${API}/${post.id}`,{method:'DELETE'})
   .then(()=>onRemove(post.id));
 };
 if(editing){
  return (
   <li>
    <input value={title} onChange={e=>setTitle(e.target.value)} />
    <textarea value={content} onChange={e=>setContent(e.target.value)} />
    <button onClick={save}>Save</button>
    <button onClick={()=>setEditing(false)}>Cancel</button>
   </li>
  );
 }
 return (
  <li>
   <h3>{post.title}</h3>
   <p>{post.content}</p>
   <button onClick={()=>setEditing(true)}>Edit</button>
   <button onClick={del}>Delete</button>
  </li>
 );
}