import{b as N}from"./vendor-BfMHouvv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const p={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},B="/Instruments_2025-3/assets/no_img-LHHwQ-Ik.png";function T(r){r.code==="Escape"&&this.close()}const L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function b(r){const t=Number(r.closest(".js-card").dataset.id);return JSON.parse(localStorage.getItem(KEY_INSTRUMENT)).find(({id:n})=>n===t)}const{KEY_BASKET:m}=p;function O(r){const t=b(r);console.log(t);let o=JSON.parse(localStorage.getItem("favorite01"))??[];const n=o.some(e=>e.id===t.id);if(console.log(n),n){console.log("if"),console.log(t);let e=JSON.parse(localStorage.getItem("favorite01"))??[];e=e.filter(s=>s.id!==t.id),localStorage.setItem("favorite01",JSON.stringify(e))}else console.log("else"),console.log(t),t.presentFuv=1,o.push(t),console.log(o),localStorage.setItem("favorite01",JSON.stringify(o))}function l(r,t){const o=b(r);basketArr.some(({id:e})=>e===o.id)?(basketArr=basketArr.filter(e=>e.id!==o.id),localStorage.setItem(m,JSON.stringify(basketArr)),t=t.map(e=>{e.id===o.id&&(e.presentBas=0)})):(o.presentBas=1,basketArr.push(o),localStorage.setItem(m,JSON.stringify(basketArr)),t=t.map(e=>{e.id===o.id&&(e.presentBas=1)}))}const{KEY_BASKET:$,KEY_INSTRUMENT:R}=p;let K=JSON.parse(localStorage.getItem("favorite01"))??[];console.log(K);document.querySelector(".favorite_list");const M=document.querySelector(".checkout_list"),A=document.getElementById("index"),v=document.getElementById("favorite"),S=document.getElementById("basket");function H({img:r,name:t,price:o,description:n,id:e,presentFuv:s,presentBas:i}){let c=JSON.parse(localStorage.getItem("favorite01"))??[];console.log(c);const d=N.create(`
	    <div class="modal js-card" data-id=${e}>
            <div class="cross">
                 <img src=${L} alt="close">
            </div>
            <img src="${r}" alt="${t}" width="300">
            <h2>${t} <span>id${e}</span></h2>
            <h3>${o}point</h3>
                <p>${s}</p>
                <p>${i}</p>

            <p>${n}</p>
              <ul class="container_for_button">
                <li> 
                  <button class="button js-favorite button_fav" type="button">
                       'Add to favorite'
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
`,{handler:null,onShow(a){this.handler=T.bind(a),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),u.removeEventListener("click",f)}});d.show();const u=document.querySelector(".cross");u.addEventListener("click",f);function f(){d.close()}const E=document.querySelector(".modal");document.querySelector("div.modal button.js-favorite"),E.addEventListener("click",h);function h(a){if(a.target.closest(".js-favorite")&&(a.target.closest(".js-favorite"),A&&(JSON.parse(localStorage.getItem(R)),O(a.target))),a.target.closest(".js-basket")){const g=a.target.closest(".js-basket"),y=g.querySelector(".yes"),I=g.querySelector(".no");if(y.classList.toggle("vis"),I.classList.toggle("vis"),A&&l(a.target,allInstruments),S){l(a.target,allInstruments);const k=JSON.parse(localStorage.getItem($))??[];q(k,M)}v&&l(a.target,allInstruments)}}}let j="Add to favorite",_="Remove from",w="Add to basket",J="Remove from";const Y="visible",U="invisible";function q(r,t){let o;r.length?(o=r.map(({id:n,img:e,name:s,presentFuv:i,presentBas:c})=>`
                    <li data-id=${n} class="card js-card">
                    <img src="${e}" alt="${s}" width="300">
                    <h2>${s}</h2>
                    
                    <span>id${n}</span>
                    
                    <p></p>
                    <p></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
                    <div class="${v??S?U:Y}">
        <button class="js-favorite" type="button">${i?_:j}</button>
        <button class="js-basket" type="button">${c?J:w}</button>
                    </div>
                    </li>
                    `).join(""),t.innerHTML=o):(o=`<li class="js-card">
                    <img src=${B} alt="404" width="300">
                    </li>`,t.innerHTML=o)}export{q as a,H as b,p as c,l as d,b as f,O as t};
//# sourceMappingURL=createMarkup-VZNtZcAK.js.map
