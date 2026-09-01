import React, {useEffect} from 'react';
export default function ScrollTop(){
 useEffect(()=>{ const b=document.getElementById('scrollTopButton'); if(!b)return; const fn=()=>window.scrollTo({top:0,behavior:'smooth'}); b.addEventListener('click',fn); return()=>b.removeEventListener('click',fn);},[]);
 return null;
}
