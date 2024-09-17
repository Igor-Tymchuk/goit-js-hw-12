import{S as d,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="45921559-66c2b9b15ee0f1bc0f2b1e46c",m="https://pixabay.com/api/",h=s=>{const o=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},g=s=>s.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:i,downloads:p})=>`
<li class="card">
<a href="${r}">
<img src="${o}" class="image" height="200px" width="360px" alt="${n}" />
</a>
<div class="informations">
    <div class="current-info">
    <p class="title-info">Likes</p>
    <p class="count">${e}</p>
  </div>
  <div class="current-info">
    <p class="title-info">Views</p>
    <p class="count">${t}</p>
  </div>
  <div class="current-info">
      <p class="title-info">Comments</p>
      <p class="count">${i}</p>
  </div>
  <div class="current-info">
      <p class="title-info">Downloads</p>
      <p class="count">${p}</p>
  </div>
</div>
</li>`),a=document.querySelector(".gallery"),u=document.querySelector(".searchImg"),y=()=>l.show({message:"Input is empty!",position:"topRight",icon:"ico-warning",backgroundColor:"orangered",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"432px"}),b=()=>l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"350px",icon:"ico-error"}),v=new d(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),c=()=>document.querySelector("span").classList.toggle("loader"),L=s=>{s.preventDefault();const o=s.currentTarget.elements.searchText.value.toLowerCase().trim();if(!o)return y();a.innerHTML="",c(),h(o).then(r=>{if(!r.hits.length)return b();a.insertAdjacentHTML("beforeend",g(r.hits).join("")),v.refresh()}).catch(r=>console.log(r)).finally(()=>c()),u.reset()};u.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
