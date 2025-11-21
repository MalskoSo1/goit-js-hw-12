import{a as b,i as d,S as L}from"./assets/vendor-Cx9ob2aQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const w="53339801-8b3ce8e2b4688b576eb7bcf24",q="https://pixabay.com/api/";async function u(e,t){try{const r={key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15},a=await b.get(q,{params:r});return a.data.hits.length===0&&d.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#b51b1b"}),a.data}catch(r){console.log(r)}}const v=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,widthRatio:.77,heightRatio:.92}),p={gallery:document.querySelector("#gallery")};function m(e){const t=e.map(r=>P(r)).join("");p.gallery.insertAdjacentHTML("beforeend",t),v.refresh()}function x(){p.gallery.innerHTML=""}function g(){const e=document.querySelector(".loader");e.style.display="block"}function y(){const e=document.querySelector(".loader");e.style.display="none"}function S(){document.querySelector(".btn-load-more").classList.remove("is-hidden")}function C(){document.querySelector(".btn-load-more").classList.add("is-hidden")}function P(e){return`<li class="gallery-item">
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
  </li>`}const l={form:document.querySelector(".form"),btnLoadMore:document.querySelector(".js-btn-load-more")};let f="",i=1,n=0;l.form.addEventListener("submit",async e=>{e.preventDefault();const t=l.form.querySelector('input[name="search-text"]'),r=t.value.trim();if(r===""){t.value="";return}f=r,i=1,n=0,x(),g();try{let a=await u(r,i);n=a.totalHits,m(a.hits),h(i,n)}catch(a){console.log(a)}y()});l.btnLoadMore.addEventListener("click",async e=>{try{g(),i++;let t=await u(f,i);h(i,n),m(t.hits),R(),y()}catch(t){console.log(t)}});function h(e,t){t!==0&&(S(),e*15>=t&&(C(),d.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#b51b1b"})))}function R(){document.body.getBoundingClientRect(),window.scrollBy({top:492,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
