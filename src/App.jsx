import React,{useEffect,useState} from 'react';
import {routes,normalizePath} from './routes';
import {loadSiteScripts} from './scripts/siteScripts';
import ScrollAnimations from "./helper/ScrollAnimations"
import './styles/app.css';

export default function App(){
 const [path,setPath]=useState(()=>normalizePath(window.location.pathname));
 const page=routes[path]||routes['/404'];
 const Page=page.component;
 useEffect(()=>{
   document.title=page.title;
   const meta=document.querySelector('meta[name=description]');
   if(meta && page.description) meta.setAttribute('content',page.description);
   window.scrollTo({top:0,behavior:'instant'});
   const onClick=(e)=>{
     const a=e.target.closest('a[href]'); if(!a) return;
     const href=a.getAttribute('href');
     if(!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || a.target==='_blank') return;
     if(href.startsWith('/')){ e.preventDefault(); window.history.pushState({},'',href); setPath(normalizePath(href)); }
   };
   document.addEventListener('click',onClick);
   loadSiteScripts();
   return()=>document.removeEventListener('click',onClick);
 },[path,page.title,page.description]);
  return (
    <>
      <ScrollAnimations />
      <Page />
    </>
  );
}
