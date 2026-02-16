import{a as f,S as y,i as l}from"./assets/vendor--6n4cVRZ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="https://pixabay.com/api",v=void 0;f.defaults.baseURL=d;function w(s){return f({url:d,method:"get",params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data).catch(o=>console.log(o))}const m=document.querySelector(".gallery"),p=document.querySelector(".loader");let c=null;function L(s){const o=s.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:n,comments:h,downloads:g})=>`
            <li class="list-item">
                <a href="${a}"><img src="${r}" alt="${e}" /></a>
                <div class="list-content">
                    <div>
                        <h2 class="likes">Likes</h2>
                        <p class="count-likes">${t}</p>
                    </div>
                    <div>
                        <h2 class="views">Views</h2>
                        <p class="count-views">${n}</p>
                    </div>
                    <div>
                        <h2 class="comments">Comments</h2>
                        <p class="count-comments">${h}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${g}</p>
                    </div>
                </div>
            </li>
        `).join("");m.innerHTML=o,c?c.refresh():c=new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function b(){m.innerHTML=""}function x(){p.style.display="inline-block"}function i(){p.style.display="none"}const u=document.querySelector(".form");u.addEventListener("submit",S);i();function S(s){s.preventDefault();const o=new FormData(u).get("search-text").trim();if(o===""){l.show({message:"Please enter a search query!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),i();return}b(),x(),w(o).then(({hits:r})=>{if(!r||r.length===0){l.show({message:" Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),i();return}L(r),i()}).catch(r=>{i(),console.log(r.message),l.show({message:"Sorry, but there was an error processing your request. Please try again.",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"})}),u.reset()}
//# sourceMappingURL=index.js.map
