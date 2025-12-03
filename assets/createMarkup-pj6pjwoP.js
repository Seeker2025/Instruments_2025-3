import{b as _}from"./vendor-BfMHouvv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const L="/Instruments_2025-3/assets/in01-DDtRZv0L.jpg",N="/Instruments_2025-3/assets/in02-BLtyIFcg.jpg",x="/Instruments_2025-3/assets/in03-DxX5vNo9.jpg",M="/Instruments_2025-3/assets/in04-BFeooFc0.jpg",D="/Instruments_2025-3/assets/in05-D0f0Nwn2.jpg",J="/Instruments_2025-3/assets/in06-CCY3mjLl.jpg",$="/Instruments_2025-3/assets/in07-DSke7PNe.jpg",K="/Instruments_2025-3/assets/in08-Cffekw7m.jpg",T="/Instruments_2025-3/assets/in09-B7A1B4HK.jpg",w="/Instruments_2025-3/assets/in10-C8QsgQ0Q.jpg",F=[{id:1,img:L,name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:N,name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:x,name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:M,name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:D,name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:J,name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:$,name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:K,name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"},{id:9,img:T,name:"Культиватор",price:10890,description:"Культиватор електричний Dnipro-M 40"},{id:10,img:w,name:"Лобзик",price:10890,description:"Лобзик електричний Dnipro-M JS-80LX + Набір пиляльних полотен 5 шт"}],R={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},Y="/Instruments_2025-3/assets/no_img-LHHwQ-Ik.png";function P(i){i.code==="Escape"&&this.close()}const H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function k(i){const e=Number(i.closest(".js-card").dataset.id);return F.find(({id:n})=>n===e)}const{KEY_FAVORITE:m,KEY_BASKET:A}=R;let Q=JSON.parse(localStorage.getItem(m))??[],d=JSON.parse(localStorage.getItem(A))??[];console.log(Q);function u(i){const e=k(i);console.log(e);let n=JSON.parse(localStorage.getItem(m))??[];if(n.some(t=>t.id===e.id)){let t=JSON.parse(localStorage.getItem(m))??[];t=t.filter(o=>o.id!==e.id),localStorage.setItem(m,JSON.stringify(t))}else n.push(e),localStorage.setItem(m,JSON.stringify(n))}function p(i){const e=k(i);d.some(({id:r})=>r===e.id)?(d=d.filter(r=>r.id!==e.id),localStorage.setItem(A,JSON.stringify(d))):(d.push(e),localStorage.setItem(A,JSON.stringify(d)))}const{KEY_FAVORITE:v,KEY_BASKET:S}=R;let U=JSON.parse(localStorage.getItem(v))??[],V=JSON.parse(localStorage.getItem(S))??[];const q=document.querySelector(".favorite_list"),X=document.querySelector(".checkout_list"),b=document.getElementById("index"),I=document.getElementById("favorite"),E=document.getElementById("basket");function st({img:i,name:e,price:n,description:r,id:t,presentFuv:o,presentBas:l}){const g=_.create(`
	    <div class="modal js-card" data-id=${t}>
            <div class="cross">
                 <img src=${H} alt="close">
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
`,{handler:null,onShow(s){this.handler=P.bind(s),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),h.removeEventListener("click",C)}});g.show();const h=document.querySelector(".cross");h.addEventListener("click",C);function C(){g.close()}const j=document.querySelector(".modal"),a=document.querySelector("div.modal button.js-favorite");a.textContent="Remove from";const c=document.querySelector("div.modal button.js-basket");V.some(s=>s.id===t)?c.textContent="Remove from":c.textContent="Add to";const y=U.some(s=>s.id===t);console.log(y),y?a.textContent="Remove from":a.textContent="Add to",j.addEventListener("click",O);function O(s){if(s.preventDefault(),s.target.closest(".js-favorite")){if(b&&u(s.target),I){u(s.target);const f=JSON.parse(localStorage.getItem(v))??[];B(f,q),a.textContent==="Add to"?a.textContent="Remove from":a.textContent="Add to"}E&&(console.log("a"),console.log("a"),JSON.parse(localStorage.getItem(v)),u(s.target),a.textContent==="Remove from"?a.textContent="Add to":a.textContent="Remove from")}if(s.target.closest(".js-basket")){if(b&&p(s.target),E){console.log("d"),console.log("d"),p(s.target);const f=JSON.parse(localStorage.getItem(S))??[];B(f,X),c.textContent==="Remove from"?c.textContent="Add to":c.textContent="Remove from"}I&&(JSON.parse(localStorage.getItem(S)),p(s.target),c.textContent==="Remove from"?c.textContent="Add to":c.textContent="Remove from")}}}let G="Add to favorite",W="Remove from",Z="Add to basket",z="Remove from";const tt="visible",et="invisible";function B(i,e){let n;i.length?(n=i.map(({id:r,img:t,name:o,presentFuv:l,presentBas:g})=>`
                    <li data-id=${r} class="card js-card">
                    <img src="${t}" alt="${o}" width="300">
                    <h2>${o}</h2>
                    
                    <span>id${r}</span>
                    
                    <p></p>
                    <p></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
    <div class="${b??I??E?et:tt}">
    <button class="js-favorite" type="button">${l?W:G}</button>
    <button class="js-basket" type="button">${g?z:Z}</button>
                    </div>
                    </li>
                    `).join(""),e.innerHTML=n):(n=`<li class="js-card">
                    <img src=${Y} alt="404" width="300">
                    </li>`,e.innerHTML=n)}export{B as a,st as b,R as c,p as d,k as f,F as i,u as t};
//# sourceMappingURL=createMarkup-pj6pjwoP.js.map
