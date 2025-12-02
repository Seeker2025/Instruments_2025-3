import{b as B}from"./vendor-BfMHouvv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const j="/Instruments_2025-3/assets/in01-DDtRZv0L.jpg",L="/Instruments_2025-3/assets/in02-BLtyIFcg.jpg",_="/Instruments_2025-3/assets/in03-DxX5vNo9.jpg",M="/Instruments_2025-3/assets/in04-BFeooFc0.jpg",N="/Instruments_2025-3/assets/in05-D0f0Nwn2.jpg",D="/Instruments_2025-3/assets/in06-CCY3mjLl.jpg",O="/Instruments_2025-3/assets/in07-DSke7PNe.jpg",$="/Instruments_2025-3/assets/in08-Cffekw7m.jpg",w="/Instruments_2025-3/assets/in09-B7A1B4HK.jpg",R="/Instruments_2025-3/assets/in10-C8QsgQ0Q.jpg",C=[{id:1,img:j,name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:L,name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:_,name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:M,name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:N,name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:D,name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:O,name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:$,name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"},{id:9,img:w,name:"Культиватор",price:10890,description:"Культиватор електричний Dnipro-M 40"},{id:10,img:R,name:"Лобзик",price:10890,description:"Лобзик електричний Dnipro-M JS-80LX + Набір пиляльних полотен 5 шт"}],b={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},J="/Instruments_2025-3/assets/no_img-LHHwQ-Ik.png";function K(n){n.code==="Escape"&&this.close()}const T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function S(n){const t=Number(n.closest(".js-card").dataset.id);return C.find(({id:s})=>s===t)}const{KEY_BASKET:u}=b;let H=JSON.parse(localStorage.getItem("favorite01"))??[];console.log(H);function f(n){const t=S(n);console.log(t);let s=JSON.parse(localStorage.getItem("favorite01"))??[];const r=s.some(o=>o.id===t.id);console.log(r);const e=document.querySelector("button.js-favorite");if(r){console.log("if"),console.log(t);let o=JSON.parse(localStorage.getItem("favorite01"))??[];o=o.filter(a=>a.id!==t.id),e.textContent="add",localStorage.setItem("favorite01",JSON.stringify(o))}else console.log("else"),console.log(t),t.presentFuv=1,s.push(t),console.log(s),e.textContent="rem",localStorage.setItem("favorite01",JSON.stringify(s))}function d(n,t){const s=S(n);basketArr.some(({id:e})=>e===s.id)?(basketArr=basketArr.filter(e=>e.id!==s.id),localStorage.setItem(u,JSON.stringify(basketArr)),t=t.map(e=>{e.id===s.id&&(e.presentBas=0)})):(s.presentBas=1,basketArr.push(s),localStorage.setItem(u,JSON.stringify(basketArr)),t=t.map(e=>{e.id===s.id&&(e.presentBas=1)}))}const{KEY_BASKET:P}=b;let Y=JSON.parse(localStorage.getItem("favorite01"))??[];const q=document.querySelector(".favorite_list"),Q=document.querySelector(".checkout_list"),A=document.getElementById("index"),m=document.getElementById("favorite"),I=document.getElementById("basket");function z({img:n,name:t,price:s,description:r,id:e,presentFuv:o,presentBas:a}){document.querySelector("div.modal button.js-favorite"),console.log(Y);const c=B.create(`
	    <div class="modal js-card" data-id=${e}>
            <div class="cross">
                 <img src=${T} alt="close">
            </div>
            <img src="${n}" alt="${t}" width="300">
            <h2>${t} <span>id${e}</span></h2>
            <h3>${s}point</h3>
                <p>${o}</p>
                <p>${a}</p>

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
`,{handler:null,onShow(i){this.handler=K.bind(i),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),p.removeEventListener("click",g)}});c.show();const p=document.querySelector(".cross");p.addEventListener("click",g);function g(){c.close()}document.querySelector(".modal").addEventListener("click",y);function y(i){if(i.preventDefault(),i.target.closest(".js-favorite")&&(i.target.closest(".js-favorite"),A&&f(i.target),m)){console.log("Hi"),f(i.target);const l=JSON.parse(localStorage.getItem("favorite01"))??[];v(l,q)}if(i.target.closest(".js-basket")){const l=i.target.closest(".js-basket"),h=l.querySelector(".yes"),k=l.querySelector(".no");if(h.classList.toggle("vis"),k.classList.toggle("vis"),A&&d(i.target,allInstruments),I){d(i.target,allInstruments),console.log(e);const E=JSON.parse(localStorage.getItem(P))??[];v(E,Q)}m&&(d(i.target,allInstruments),console.log("id"))}}}let F="Add to favorite",U="Remove from",x="Add to basket",V="Remove from";const X="visible",G="invisible";function v(n,t){let s;n.length?(s=n.map(({id:r,img:e,name:o,presentFuv:a,presentBas:c})=>`
                    <li data-id=${r} class="card js-card">
                    <img src="${e}" alt="${o}" width="300">
                    <h2>${o}</h2>
                    
                    <span>id${r}</span>
                    
                    <p></p>
                    <p></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
                    <div class="${m??I?G:X}">
        <button class="js-favorite" type="button">${a?U:F}</button>
        <button class="js-basket" type="button">${c?V:x}</button>
                    </div>
                    </li>
                    `).join(""),t.innerHTML=s):(s=`<li class="js-card">
                    <img src=${J} alt="404" width="300">
                    </li>`,t.innerHTML=s)}export{v as a,z as b,b as c,d,S as f,C as i,f as t};
//# sourceMappingURL=createMarkup-CR_uJK9O.js.map
