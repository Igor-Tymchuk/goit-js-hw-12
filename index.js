import{a as L,S as w,i as m}from"./assets/vendor-mdVVRe9K.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const x="45921559-66c2b9b15ee0f1bc0f2b1e46c",S="https://pixabay.com/api/",g=async(t,o,i)=>{const r=new URLSearchParams({key:x,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:i});return await L.get(`${S}?${r}`).then(e=>e.data)},y=t=>t.map(({webformatURL:o,largeImageURL:i,tags:r,likes:e,views:s,comments:n,downloads:v})=>`
<li class="card">
<a href="${i}">
<img src="${o}" class="image" height="200px" width="360px" alt="${r}" />
</a>
<div class="informations">
    <div class="current-info">
    <p class="title-info">Likes</p>
    <p class="count">${e}</p>
  </div>
  <div class="current-info">
    <p class="title-info">Views</p>
    <p class="count">${s}</p>
  </div>
  <div class="current-info">
      <p class="title-info">Comments</p>
      <p class="count">${n}</p>
  </div>
  <div class="current-info">
      <p class="title-info">Downloads</p>
      <p class="count">${v}</p>
  </div>
</div>
</li>`),d=document.querySelector(".gallery"),u=document.querySelector(".searchImg"),c=document.querySelector(".show-more"),p=15;let a,f;const C=()=>m.show({message:"Input is empty!",position:"topRight",icon:"ico-warning",backgroundColor:"orangered",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"350px"}),P=()=>m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"350px",icon:"ico-error"}),$=()=>m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"350px",backgroundColor:"#4e75ff"}),b=new w(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),h=()=>document.querySelector("span").classList.toggle("loader");let l="";const q=t=>{if(t.preventDefault(),a=1,f=p,c.classList.add("hidden"),l=u.elements.searchText.value.toLowerCase().trim(),!l)return C();d.innerHTML="",h(),g(l,p,a).then(o=>{if(!o.hits.length)return P();d.insertAdjacentHTML("beforeend",y(o.hits).join("")),b.refresh(),o.totalHits>=f&&c.classList.remove("hidden")}).catch(o=>console.log(o)).finally(()=>h()),u.reset()},z=()=>{a++,f=p*a,h(),c.classList.add("hidden"),g(l,p,a).then(t=>{d.insertAdjacentHTML("beforeend",y(t.hits).join("")),b.refresh(),I(),t.totalHits>f?c.classList.remove("hidden"):$()}).catch(t=>console.log(t)).finally(()=>h())},I=()=>{const t=d.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})};u.addEventListener("submit",q);c.addEventListener("click",z);
//# sourceMappingURL=index.js.map
