import{b as B}from"./vendor-BfMHouvv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},L="/Instruments_2025-3/assets/no_img-LHHwQ-Ik.png";function N(n){n.code==="Escape"&&this.close()}const O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function b(n,s){const t=Number(n.closest(".js-card").dataset.id);return s.find(({id:e})=>e===t)}const{KEY_BASKET:m}=p;function $(n,s){const t=b(n,s);console.log(t);let r=JSON.parse(localStorage.getItem("favorite01"))??[];const e=r.some(o=>o.id===t.id);if(console.log(e),e){console.log("if"),console.log(t);let o=JSON.parse(localStorage.getItem("favorite01"))??[];o=o.filter(i=>i.id!==t.id),localStorage.setItem("favorite01",JSON.stringify(o))}else console.log("else"),console.log(t),t.presentFuv=1,r.push(t),console.log(r),localStorage.setItem("favorite01",JSON.stringify(r))}function d(n,s){const t=b(n,s);basketArr.some(({id:e})=>e===t.id)?(basketArr=basketArr.filter(e=>e.id!==t.id),localStorage.setItem(m,JSON.stringify(basketArr)),s=s.map(e=>{e.id===t.id&&(e.presentBas=0)})):(t.presentBas=1,basketArr.push(t),localStorage.setItem(m,JSON.stringify(basketArr)),s=s.map(e=>{e.id===t.id&&(e.presentBas=1)}))}const{KEY_BASKET:T,KEY_INSTRUMENT:j}=p;let R=JSON.parse(localStorage.getItem("favorite01"))??[];console.log(R);document.querySelector(".favorite_list");const w=document.querySelector(".checkout_list"),A=document.getElementById("index"),v=document.getElementById("favorite"),S=document.getElementById("basket");function H({img:n,name:s,price:t,description:r,id:e,presentFuv:o,presentBas:i}){let l=JSON.parse(localStorage.getItem("favorite01"))??[];console.log(l);const f=B.create(`
	    <div class="modal js-card" data-id=${e}>
            <div class="cross">
                 <img src=${O} alt="close">
            </div>
            <img src="${n}" alt="${s}" width="300">
            <h2>${s} <span>id${e}</span></h2>
            <h3>${t}point</h3>
                <p>${o}</p>
                <p>${i}</p>

            <p>${r}</p>
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
`,{handler:null,onShow(a){this.handler=N.bind(a),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),u.removeEventListener("click",g)}});f.show();const u=document.querySelector(".cross");u.addEventListener("click",g);function g(){f.close()}const h=document.querySelector(".modal");document.querySelector("div.modal button.js-favorite"),h.addEventListener("click",y);function y(a){if(a.target.closest(".js-favorite")&&(a.target.closest(".js-favorite"),A)){const c=JSON.parse(localStorage.getItem(j));$(a.target,c)}if(a.target.closest(".js-basket")){const c=a.target.closest(".js-basket"),E=c.querySelector(".yes"),k=c.querySelector(".no");if(E.classList.toggle("vis"),k.classList.toggle("vis"),A&&d(a.target,allInstruments),S){d(a.target,allInstruments);const I=JSON.parse(localStorage.getItem(T))??[];C(I,w)}v&&d(a.target,allInstruments)}}}let K="Add to favorite",M="Remove from",J="Add to basket",_="Remove from";const Y="visible",q="invisible";function C(n,s){let t;n.length?(t=n.map(({id:r,img:e,name:o,presentFuv:i,presentBas:l})=>`
                    <li data-id=${r} class="card js-card">
                    <img src="${e}" alt="${o}" width="300">
                    <h2>${o}</h2>
                    
                    <span>id${r}</span>
                    
                    <p></p>
                    <p></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
                    <div class="${v??S?q:Y}">
        <button class="js-favorite" type="button">${i?M:K}</button>
        <button class="js-basket" type="button">${l?_:J}</button>
                    </div>
                    </li>
                    `).join(""),s.innerHTML=t):(t=`<li class="js-card">
                    <img src=${L} alt="404" width="300">
                    </li>`,s.innerHTML=t)}export{C as a,H as b,p as c,d,b as f,$ as t};
//# sourceMappingURL=createMarkup-ClrMmseh.js.map
