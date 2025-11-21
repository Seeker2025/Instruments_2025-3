import{b as R}from"./vendor-DaP2veRQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const T="/Instruments_2025-3/assets/in01-DDtRZv0L.jpg",K="/Instruments_2025-3/assets/in02-BLtyIFcg.jpg",$="/Instruments_2025-3/assets/in03-DxX5vNo9.jpg",D="/Instruments_2025-3/assets/in04-BFeooFc0.jpg",J="/Instruments_2025-3/assets/in05-D0f0Nwn2.jpg",w="/Instruments_2025-3/assets/in06-CCY3mjLl.jpg",Y="/Instruments_2025-3/assets/in07-DSke7PNe.jpg",C="/Instruments_2025-3/assets/in08-Cffekw7m.jpg",F="/Instruments_2025-3/assets/in09-B7A1B4HK.jpg",U="/Instruments_2025-3/assets/in10-C8QsgQ0Q.jpg",q=[{id:1,img:T,name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:K,name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:$,name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:D,name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:J,name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:w,name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:Y,name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:C,name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"},{id:9,img:F,name:"Культиватор",price:10890,description:"Культиватор електричний Dnipro-M 40"},{id:10,img:U,name:"Лобзик",price:10890,description:"Лобзик електричний Dnipro-M JS-80LX + Набір пиляльних полотен 5 шт"}],N={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},P="/Instruments_2025-3/assets/no_img-LHHwQ-Ik.png";function H(o){o.code==="Escape"&&this.close()}const Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function _(o,e){const s=Number(o.closest(".js-card").dataset.id);return e.find(({id:i})=>i===s)}const{KEY_FAVORITE:L,KEY_BASKET:j}=N;let d=JSON.parse(localStorage.getItem(L))??[],p=JSON.parse(localStorage.getItem(j))??[];function A(o,e){const s=_(o,e);d.some(({id:t})=>t===s.id)?(d=d.filter(t=>t.id!==s.id),localStorage.setItem(L,JSON.stringify(d)),e=e.map(t=>{t.id===s.id&&(t.presentFuv=0)})):(s.presentFuv=1,d.push(s),localStorage.setItem(L,JSON.stringify(d)),e=e.map(t=>{t.id===s.id&&(t.presentFuv=1)}))}function S(o,e){const s=_(o,e);p.some(({id:t})=>t===s.id)?(p=p.filter(t=>t.id!==s.id),localStorage.setItem(j,JSON.stringify(p)),e=e.map(t=>{t.id===s.id&&(t.presentBas=0)})):(s.presentBas=1,p.push(s),localStorage.setItem(j,JSON.stringify(p)),e=e.map(t=>{t.id===s.id&&(t.presentBas=1)}))}const{KEY_FAVORITE:V,KEY_BASKET:x,KEY_INSTRUMENT:X}=N,g=JSON.parse(localStorage.getItem(X)),G=document.querySelector(".favorite_list"),W=document.querySelector(".checkout_list"),M=document.getElementById("index"),b=document.getElementById("favorite"),B=document.getElementById("basket");function Z({img:o,name:e,price:s,description:i,id:t,presentFuv:n,presentBas:c}){const l=R.create(`
	    <div class="modal js-card" data-id=${t}>
            <div class="cross">
                 <img src=${Q} alt="close">
            </div>
            <img src="${o}" alt="${e}" width="300">
            <h2>${e} <span>id${t}</span></h2>
            <h3>${s}point</h3>
                <p>${n}</p>
                <p>${c}</p>

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
`,{handler:null,onShow(r){this.handler=H.bind(r),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),f.removeEventListener("click",k)}});l.show();const f=document.querySelector(".cross");f.addEventListener("click",k);function k(){l.close()}document.querySelector(".modal").addEventListener("click",O);function O(r){if(r.target.closest(".js-favorite")){const m=r.target.closest(".js-favorite"),y=m.querySelector(".yes"),I=m.querySelector(".no");if(y.classList.toggle("vis"),I.classList.toggle("vis"),M&&A(r.target,g),b){A(r.target,g);const h=JSON.parse(localStorage.getItem(V))??[];u(h,G)}B&&A(r.target,g)}if(r.target.closest(".js-basket")){const m=r.target.closest(".js-basket"),y=m.querySelector(".yes"),I=m.querySelector(".no");if(y.classList.toggle("vis"),I.classList.toggle("vis"),M&&S(r.target,g),B){S(r.target,g);const h=JSON.parse(localStorage.getItem(x))??[];u(h,W)}b&&S(r.target,g)}}}let z="Add to favorite",tt="Remove from",et="Add to basket",st="Remove from";console.log(b);const ot="visible",nt="invisible";function u(o,e){let s;o.length?(s=o.map(({id:i,img:t,name:n,presentFuv:c,presentBas:l})=>`
                    <li data-id=${i} class="card js-card">
                    <img src="${t}" alt="${n}" width="300">
                    <h2>${n}</h2>
                    
                    <span>id${i}</span>
                    
                    <p></p>
                    <p></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
                    <div class="${b??B?nt:ot}">
        <button class="js-favorite" type="button">${c?tt:z}</button>
        <button class="js-basket" type="button">${l?st:et}</button>
                    </div>
                    </li>
                    `).join(""),e.innerHTML=s):(s=`<li class="js-card">
                    <img src=${P} alt="404" width="300">
                    </li>`,e.innerHTML=s)}const{KEY_INSTRUMENT:v}=N,E=document.querySelector(".js-list");localStorage.setItem(v,JSON.stringify(q));const a=JSON.parse(localStorage.getItem(v));console.log(a);u(a,E);E.addEventListener("click",it);function it(o){if(o.preventDefault(),console.log(a),o.target.classList.contains("js-info")){const e=_(o.target,a);e.presentFuv=0,e.presentBas=0;const{img:s,name:i,price:t,description:n,id:c,presentFuv:l,presentBas:f}=e;Z({img:s,name:i,price:t,description:n,id:c,presentFuv:l,presentBas:f})}o.target.classList.contains("js-favorite")&&(A(o.target,a),localStorage.setItem(v,JSON.stringify(a)),u(a,E)),o.target.classList.contains("js-basket")&&(S(o.target,a),localStorage.setItem(v,JSON.stringify(a)),u(a,E))}export{u as a,Z as b,N as c,S as d,_ as f,A as t};
//# sourceMappingURL=index-Vu_2EGKs.js.map
