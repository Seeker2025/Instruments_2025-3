import{b as $}from"./vendor-DaP2veRQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const k="/Instruments_2025-3/assets/in01-DDtRZv0L.jpg",R="/Instruments_2025-3/assets/in02-BLtyIFcg.jpg",T="/Instruments_2025-3/assets/in03-DxX5vNo9.jpg",M="/Instruments_2025-3/assets/in04-BFeooFc0.jpg",O="/Instruments_2025-3/assets/in05-D0f0Nwn2.jpg",K="/Instruments_2025-3/assets/in06-CCY3mjLl.jpg",D="/Instruments_2025-3/assets/in07-DSke7PNe.jpg",w="/Instruments_2025-3/assets/in08-Cffekw7m.jpg",J="/Instruments_2025-3/assets/in09-B7A1B4HK.jpg",F="/Instruments_2025-3/assets/in10-C8QsgQ0Q.jpg",Y=[{id:1,img:k,name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:R,name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:T,name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:M,name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:O,name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:K,name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:D,name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:w,name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"},{id:9,img:J,name:"Культиватор",price:10890,description:"Культиватор електричний Dnipro-M 40"},{id:10,img:F,name:"Лобзик",price:10890,description:"Лобзик електричний Dnipro-M JS-80LX + Набір пиляльних полотен 5 шт"}],B={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},C="/Instruments_2025-3/assets/no_img-LHHwQ-Ik.png";function U(o){o.code==="Escape"&&this.close()}const P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function N(o,t){const s=Number(o.closest(".js-card").dataset.id);return t.find(({id:n})=>n===s)}const{KEY_FAVORITE:I,KEY_BASKET:h}=B;let l=JSON.parse(localStorage.getItem(I))??[],p=JSON.parse(localStorage.getItem(h))??[];function u(o,t){console.log(t);const s=N(o,t);console.log(s),l.some(({id:e})=>e===s.id)?(l=l.filter(e=>e.id!==s.id),localStorage.setItem(I,JSON.stringify(l)),t=t.map(e=>{e.id===s.id&&(e.presentFuv=0)})):(s.presentFuv=1,console.log(s),console.log(t),l.push(s),localStorage.setItem(I,JSON.stringify(l)),t=t.map(e=>{e.id===s.id&&(e.presentFuv=1)}))}function A(o,t){const s=N(o,t);p.some(({id:e})=>e===s.id)?(p=p.filter(e=>e.id!==s.id),localStorage.setItem(h,JSON.stringify(p)),t=t.map(e=>{e.id===s.id&&(e.presentBas=0)})):(s.presentBas=1,p.push(s),localStorage.setItem(h,JSON.stringify(p)),t=t.map(e=>{e.id===s.id&&(e.presentBas=1)}))}let H="Add to favorite",Q="Remove from",V="Add to basket",q="Remove from";const{KEY_FAVORITE:x,KEY_BASKET:X,KEY_INSTRUMENT:G}=B,g=JSON.parse(localStorage.getItem(G)),W=document.querySelector(".favorite_list"),Z=document.querySelector(".checkout_list"),_=document.getElementById("index"),S=document.getElementById("favorite"),y=document.getElementById("basket");function z({img:o,name:t,price:s,description:n,id:e,presentFuv:i,presentBas:r}){const d=$.create(`
	    <div class="modal js-card" data-id=${e}>
            <div class="cross">
                 <img src=${P} alt="close">
            </div>
            <img src="${o}" alt="${t}" width="300">
            <h2>${t} <span>id${e}</span></h2>
            <h3>${s}point</h3>
                <p>${i}</p>
                <p>${r}</p>

            <p>${n}</p>
              <ul class="container_for_button">
                <li> 
                  <button class="button js-favorite button_fav" type="button">
                      ${i?H:Q}
                  </button>
                </li>
                <li> 
                  <button class="button js-basket button_fav" type="button">
                      ${r?q:V}
                  </button>
                </li>  
              </ul>
      </div>
`,{handler:null,onShow(c){this.handler=U.bind(c),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),f.removeEventListener("click",j)}});d.show();const f=document.querySelector(".cross");f.addEventListener("click",j);function j(){console.log("whoa!"),d.close()}document.querySelector(".modal").addEventListener("click",L);function L(c){if(c.target.closest(".js-favorite")){if(_&&u(c.target,g),S){u(c.target,g);const v=JSON.parse(localStorage.getItem(x))??[];m(v,W)}y&&u(c.target,g)}if(c.target.closest(".js-basket")){if(_&&A(c.target,g),y){A(c.target,g);const v=JSON.parse(localStorage.getItem(X))??[];m(v,Z)}S&&A(c.target,g)}}}let ee="Add to favorite",te="Remove from",se="Add to basket",oe="Remove from";console.log(S);const ie="visible",ne="invisible";function m(o,t){let s;o.length?(s=o.map(({id:n,img:e,name:i,presentFuv:r,presentBas:d})=>`
                    <li data-id=${n} class="card js-card">
                    <img src="${e}" alt="${i}" width="300">
                    <h2>${i}</h2>
                    
                    <span>id${n}</span>
                    
                    <p></p>
                    <p></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
                    <div class="${S??y?ne:ie}">
        <button class="js-favorite" type="button">${r?te:ee}</button>
        <button class="js-basket" type="button">${d?oe:se}</button>
                    </div>
                    </li>
                    `).join(""),t.innerHTML=s):(s=`<li class="js-card">
                    <img src=${C} alt="404" width="300">
                    </li>`,t.innerHTML=s)}const{KEY_INSTRUMENT:b}=B,E=document.querySelector(".js-list");localStorage.setItem(b,JSON.stringify(Y));const a=JSON.parse(localStorage.getItem(b));console.log(a);m(a,E);E.addEventListener("click",re);function re(o){if(o.preventDefault(),console.log(a),o.target.classList.contains("js-info")){const t=N(o.target,a);t.presentFuv=0,t.presentBas=0;const{img:s,name:n,price:e,description:i,id:r,presentFuv:d,presentBas:f}=t;z({img:s,name:n,price:e,description:i,id:r,presentFuv:d,presentBas:f})}o.target.classList.contains("js-favorite")&&(u(o.target,a),localStorage.setItem(b,JSON.stringify(a)),m(a,E)),o.target.classList.contains("js-basket")&&(A(o.target,a),localStorage.setItem(b,JSON.stringify(a)),m(a,E))}export{m as a,z as b,B as c,A as d,N as f,u as t};
//# sourceMappingURL=index-pl318pQ-.js.map
