import{b as R}from"./vendor-DaP2veRQ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const B={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},T="/Instruments_2025-3.git/assets/no_img-LHHwQ-Ik.png";let I="Add to favorite",K="Remove from",N="Add to basket",_="Remove from";function E(n,o){let t;n.length?(t=n.map(({id:i,img:e,name:s,presentFuv:a,presentBas:u})=>`
                    <li data-id=${i} class="card js-card">
                    <img src="${e}" alt="${s}" width="300">
                    <h2>${s}</h2>
                    
                    <span>id${i}</span>
                    
                    <p></p>
                    <p></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
                    <div>
        <button class="js-favorite" type="button">${a?K:I}</button>
        <button class="js-basket" type="button">${u?_:N}</button>
                    </div>
                    </li>
                    `).join(""),o.innerHTML=t):(t=`<li class="js-card">
                    <img src=${T} alt="404" width="300">
                    </li>`,o.innerHTML=t)}function w(n){n.code==="Escape"&&this.close()}const $="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function L(n,o){const t=Number(n.closest(".js-card").dataset.id);return o.find(({id:i})=>i===t)}const{KEY_FAVORITE:S,KEY_BASKET:v}=B;let c=JSON.parse(localStorage.getItem(S))??[],l=JSON.parse(localStorage.getItem(v))??[];function m(n,o){console.log(o);const t=L(n,o);console.log(t),c.some(({id:e})=>e===t.id)?(c=c.filter(e=>e.id!==t.id),localStorage.setItem(S,JSON.stringify(c)),o=o.map(e=>{e.id===t.id&&(e.presentFuv=null)})):(t.presentFuv="present",console.log(t),console.log(o),c.push(t),localStorage.setItem(S,JSON.stringify(c)),o=o.map(e=>{e.id===t.id&&(e.presentFuv="present")}))}function b(n,o){const t=L(n,o);l.some(({id:e})=>e===t.id)?(l=l.filter(e=>e.id!==t.id),localStorage.setItem(v,JSON.stringify(l)),o=o.map(e=>{e.id===t.id&&(e.presentBas=null)})):(t.presentBas="present",l.push(t),localStorage.setItem(v,JSON.stringify(l)),o=o.map(e=>{e.id===t.id&&(e.presentBas="present")}))}const{KEY_FAVORITE:j,KEY_BASKET:M,KEY_INSTRUMENT:J}=B,d=JSON.parse(localStorage.getItem(J)),Y=document.querySelector(".favorite_list"),F=document.querySelector(".checkout_list"),y=document.getElementById("index"),h=document.getElementById("favorite"),k=document.getElementById("basket");function U({img:n,name:o,price:t,description:i,id:e}){const s=R.create(`
	    <div class="modal js-card" data-id=${e}>
            <div class="cross">
                 <img src=${$} alt="close">
            </div>
            <img src="${n}" alt="${o}" width="300">
            <h2>${o} <span>id${e}</span></h2>
            <h3>${t}point</h3>
            <p>${i}</p>
              <ul class="container_for_button">
                <li> 
                  <button class="button js-favorite button_fav" type="button">
                      <span class="no">Remove from favorite</span>
                      <span class="yes vis">Add to favorite</span>
                  </button>
                </li>
                <li> 
                  <button class="button js-basket button_fav" type="button">
                      <span class="no">Remove from busket</span>
                      <span class="yes vis">Add to basket</span>
                  </button>
                </li>  
              </ul>
      </div>
`,{handler:null,onShow(r){this.handler=w.bind(r),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),a.removeEventListener("click",u)}});s.show();const a=document.querySelector(".cross");a.addEventListener("click",u);function u(){console.log("whoa!"),s.close()}document.querySelector(".modal").addEventListener("click",O);function O(r){if(r.target.closest(".js-favorite")){const f=r.target.closest(".js-favorite"),g=f.querySelector(".yes"),p=f.querySelector(".no");if(g.classList.toggle("vis"),p.classList.toggle("vis"),y&&m(r.target,d),h){m(r.target,d);const A=JSON.parse(localStorage.getItem(j))??[];E(A,Y)}k&&m(r.target,d)}if(r.target.closest(".js-basket")){const f=r.target.closest(".js-basket"),g=f.querySelector(".yes"),p=f.querySelector(".no");if(g.classList.toggle("vis"),p.classList.toggle("vis"),y&&b(r.target,d),k){b(r.target,d);const A=JSON.parse(localStorage.getItem(M))??[];E(A,F)}h&&b(r.target,d)}}}export{E as a,U as b,B as c,b as d,L as f,m as t};
//# sourceMappingURL=createModal-DK3Dtcw4.js.map
