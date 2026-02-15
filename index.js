import{a as d,S as v,i as n}from"./assets/vendor--6n4cVRZ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const b="https://pixabay.com/api",w="54656491-d198bfb98120e598fae018f1a";d.defaults.baseURL=b;function L(s){return d({url:`/?key=${w}`,method:"get",params:{q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data).catch(o=>console.log(o))}const m=document.querySelector(".gallery"),p=document.querySelector(".loader");let l=null;function x(s){const o=s.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:i,comments:g,downloads:y})=>`
            <li class="list-item">
                <a href="${a}"><img src="${r}" alt="${e}" /></a>
                <div class="list-content">
                    <div>
                        <h2 class="likes">Likes</h2>
                        <p class="count-likes">${t}</p>
                    </div>
                    <div>
                        <h2 class="views">Views</h2>
                        <p class="count-views">${i}</p>
                    </div>
                    <div>
                        <h2 class="comments">Comments</h2>
                        <p class="count-comments">${g}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${y}</p>
                    </div>
                </div>
            </li>
        `).join("");m.innerHTML=o,l?l.refresh():l=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function u(){m.innerHTML=""}function f(){p.style.display="inline-block"}function h(){p.style.display="none"}const c=document.querySelector(".form");c.addEventListener("submit",S);h();function S(s){s.preventDefault();const o=new FormData(c).get("search-text").trim();if(o===""){n.show({message:"Please enter a search query!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),u(),f();return}f(),u(),L(o).then(({hits:r})=>{if(!r||r.length===0){n.show({message:" Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"});return}x(r),h()}).catch(r=>{n.show({message:"Sorry, but there was an error processing your request. Please try again.",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"})}),c.reset()}
//# sourceMappingURL=index.js.map
