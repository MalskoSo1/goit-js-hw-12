import{a as L,i,S as q}from"./assets/vendor-Cx9ob2aQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const S="53339801-8b3ce8e2b4688b576eb7bcf24",v="https://pixabay.com/api/",m=15;async function f(e,t){try{const o={key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:m};return(await L.get(v,{params:o})).data}catch(o){i.show({message:`Error: ${o}`,backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#b51b1b"})}}const R=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,widthRatio:.77,heightRatio:.92}),h={gallery:document.querySelector("#gallery")};function y(e){const t=e.map(o=>B(o)).join("");h.gallery.insertAdjacentHTML("beforeend",t),R.refresh()}function g(){h.gallery.innerHTML=""}function b(){const e=document.querySelector(".loader");e.style.display="block"}function p(){const e=document.querySelector(".loader");e.style.display="none"}function x(){document.querySelector(".btn-load-more").classList.remove("is-hidden")}function c(){document.querySelector(".btn-load-more").classList.add("is-hidden")}function B(e){return`<li class="gallery-item">
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
  </li>`}const u={form:document.querySelector(".form"),btnLoadMore:document.querySelector(".js-btn-load-more")};let C="",n=1,l=0;u.form.addEventListener("submit",async e=>{try{e.preventDefault();const t=u.form.querySelector('input[name="search-text"]'),o=t.value.trim();if(C=o,n=1,l=0,o===""){t.value="",g(),c(),i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#b51b1b"});return}c(),g(),b();let a=await f(o,n);if(a===void 0){p();return}l=a.totalHits,a.total===0&&(t.value=""),a.hits.length!==0?(w(n,l),y(a.hits)):i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#b51b1b"}),p()}catch(t){i.show({message:`Error: ${t}`,backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#b51b1b"})}});u.btnLoadMore.addEventListener("click",async e=>{try{c(),b(),n++;let t=await f(C,n);l=t.totalHits,t.hits.length!==0?(w(n,l),y(t.hits),P()):i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#b51b1b"}),p()}catch(t){i.show({message:`Error: ${t}`,backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#b51b1b"})}});function w(e,t){t!==0&&(x(),e*m>=t&&(c(),i.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#b51b1b"})))}function P(){const e=document.querySelector(".gallery-item");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
