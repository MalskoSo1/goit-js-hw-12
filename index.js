import{a as n,i as p,S as d}from"./assets/vendor-Dj0z4On-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const u="53339801-8b3ce8e2b4688b576eb7bcf24",m="https://pixabay.com/api/";function y(e){return f(m,{key:u,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0})}function f(e,r){return n.get(e,{params:r}).then(function(s){return s.data.total===0&&p.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#b51b1b"}),s.data}).catch(function(s){throw s})}const g=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,widthRatio:.77,heightRatio:.92}),c={gallery:document.querySelector("#gallery")};function h(e){const r=e.map(s=>w(s)).join("");c.gallery.innerHTML=r,g.refresh()}function b(){c.gallery.innerHTML=""}function L(){const e=document.querySelector(".loader");e.style.display="block"}function x(){const e=document.querySelector(".loader");e.style.display="none"}function w(e){return`<li class="gallery-item">
    <a class="gallery-card" href="${e.largeImageURL}">
    <img class="gallery-img" width="360" height="200" src="${e.webformatURL}" alt="${e.tags.split(",")[0]}"/>
  </a>
    <ul class="img-descriptions-list">
      <li class="img-descriptions-item">
        <p class="img-descriptions-text">Likes</p>
        <p class="img-descriptions-data">${e.likes}</p>
      </li>
      <li class="img-descriptions-item">
        <p class="img-descriptions-text">Views</p>
        <p class="img-descriptions-data">${e.views}</p>
      </li>
      <li class="img-descriptions-item">
        <p class="img-descriptions-text">Comments</p>
        <p class="img-descriptions-data">${e.comments}</p>
      </li>
      <li class="img-descriptions-item">
        <p class="img-descriptions-text">Downloads</p>
        <p class="img-descriptions-data">${e.downloads}</p>
      </li>
    </ul>
  </li>`}const l={form:document.querySelector(".form")};l.form.addEventListener("submit",async e=>{e.preventDefault();const r=l.form.querySelector('input[name="search-text"]'),s=r.value.trim();if(s===""){r.value="";return}b(),L(),y(s).then(a=>{h(a.hits)}).catch(a=>{console.log(a)}).finally(()=>x())});
//# sourceMappingURL=index.js.map
