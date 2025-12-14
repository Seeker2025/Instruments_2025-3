import{b as y}from"./vendor-DaP2veRQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const B="/Instruments_2025-3/assets/in01-DDtRZv0L.jpg",j="/Instruments_2025-3/assets/in02-BLtyIFcg.jpg",_="/Instruments_2025-3/assets/in03-DxX5vNo9.jpg",L="/Instruments_2025-3/assets/in04-BFeooFc0.jpg",O="/Instruments_2025-3/assets/in05-D0f0Nwn2.jpg",N="/Instruments_2025-3/assets/in06-CCY3mjLl.jpg",M="/Instruments_2025-3/assets/in07-DSke7PNe.jpg",D="/Instruments_2025-3/assets/in08-Cffekw7m.jpg",$="/Instruments_2025-3/assets/in09-B7A1B4HK.jpg",J="/Instruments_2025-3/assets/in10-C8QsgQ0Q.jpg",K=[{id:1,img:B,name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:j,name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:_,name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:L,name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:O,name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:N,name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:M,name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:D,name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"},{id:9,img:$,name:"Культиватор",price:10890,description:"Культиватор електричний Dnipro-M 40"},{id:10,img:J,name:"Лобзик",price:10890,description:"Лобзик електричний Dnipro-M JS-80LX + Набір пиляльних полотен 5 шт"}],C={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},T="/Instruments_2025-3/assets/no_img-LHHwQ-Ik.png";function w(i){i.code==="Escape"&&this.close()}const F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function E(i){const e=Number(i.closest(".js-card").dataset.id);return K.find(({id:n})=>n===e)}const{KEY_FAVORITE:m,KEY_BASKET:A}=C;let Y=JSON.parse(localStorage.getItem(m))??[],l=JSON.parse(localStorage.getItem(A))??[];console.log(Y);function g(i){const e=E(i);console.log(e);let n=JSON.parse(localStorage.getItem(m))??[];if(n.some(t=>t.id===e.id)){let t=JSON.parse(localStorage.getItem(m))??[];t=t.filter(o=>o.id!==e.id),localStorage.setItem(m,JSON.stringify(t))}else n.push(e),localStorage.setItem(m,JSON.stringify(n))}function p(i){const e=E(i);l.some(({id:r})=>r===e.id)?(l=l.filter(r=>r.id!==e.id),localStorage.setItem(A,JSON.stringify(l))):(l.push(e),localStorage.setItem(A,JSON.stringify(l)))}const{KEY_FAVORITE:v,KEY_BASKET:h}=C;let P=JSON.parse(localStorage.getItem(v))??[],H=JSON.parse(localStorage.getItem(h))??[];const Q=document.querySelector(".favorite_list"),U=document.querySelector(".checkout_list"),b=document.getElementById("index"),S=document.getElementById("favorite"),I=document.getElementById("basket");function ot({img:i,name:e,price:n,description:r,id:t}){const o=y.create(`
	    <div class="modal js-card" data-id=${t}>
            <div class="cross">
                 <img src=${F} alt="close">
            </div>
            <img src="${i}" alt="${e}" width="300">
            <h2>${e} <span>id${t}</span></h2>
            <h3>${n}point</h3>
                

            <p>${r}</p>
              <ul class="container_for_button">
                <li> 
                  <button class="button js-favorite button_fav" type="button">
                       'text'
                  </button>
                </li>
                <li> 
                  <button class="button js-basket button_fav" type="button">
                        'text'
                  </button>
                </li>  
              </ul>
      </div>
`,{handler:null,onShow(s){this.handler=w.bind(s),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),d.removeEventListener("click",f)}});o.show();const d=document.querySelector(".cross");d.addEventListener("click",f);function f(){o.close()}const R=document.querySelector(".modal"),a=document.querySelector("div.modal button.js-basket");H.some(s=>s.id===t)?a.textContent="Remove from basket":a.textContent="Add to basket";const c=document.querySelector("div.modal button.js-favorite");P.some(s=>s.id===t)?c.textContent="Remove from favorite":c.textContent="Add to favorite",R.addEventListener("click",x);function x(s){if(s.preventDefault(),s.target.closest(".js-favorite")){if(b&&(g(s.target),c.textContent==="Add to favorite"?c.textContent="Remove from favorite":c.textContent="Add to favorite"),S){g(s.target);const u=JSON.parse(localStorage.getItem(v))??[];k(u,Q),c.textContent==="Add to favorite"?c.textContent="Remove from favorite":c.textContent="Add to favorite"}I&&(JSON.parse(localStorage.getItem(v)),g(s.target),c.textContent==="Remove from favorite"?c.textContent="Add to favorite":c.textContent="Remove from favorite")}if(s.target.closest(".js-basket")){if(b&&(p(s.target),a.textContent==="Remove from basket"?a.textContent="Add to basket":a.textContent="Remove from basket"),I){p(s.target);const u=JSON.parse(localStorage.getItem(h))??[];k(u,U),a.textContent==="Remove from basket"?a.textContent="Add to basket":a.textContent="Remove from basket"}S&&(p(s.target),a.textContent==="Remove from basket"?a.textContent="Add to basket":a.textContent="Remove from basket")}}}let V="Add to favorite",q="Remove from",X="Add to basket",G="Remove from";const W="visible",Z="invisible";function k(i,e){let n;i.length?(n=i.map(({id:r,img:t,name:o,presentFuv:d,presentBas:f})=>`
                    <li data-id=${r} class="card js-card">
                    <img src="${t}" alt="${o}" width="300">
                    <h2>${o}</h2>
                    
                    <span>id${r}</span>
                    
                    <p></p>
                    <p></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
    <div class="${b??S??I?Z:W}">
    <button class="js-favorite" type="button">${d?q:V}</button>
    <button class="js-basket" type="button">${f?G:X}</button>
                    </div>
                    </li>
                    `).join(""),e.innerHTML=n):(n=`<li class="js-card">
                    <img src=${T} alt="404" width="300">
                    </li>`,e.innerHTML=n)}export{k as a,ot as b,C as c,p as d,E as f,K as i,g as t};
//# sourceMappingURL=createMarkup-Dq8Dad2v.js.map
