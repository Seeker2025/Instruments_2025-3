import{b as $}from"./vendor-BfMHouvv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const D="/Instruments_2025-3/assets/in01-DDtRZv0L.jpg",R="/Instruments_2025-3/assets/in02-BLtyIFcg.jpg",J="/Instruments_2025-3/assets/in03-DxX5vNo9.jpg",K="/Instruments_2025-3/assets/in04-BFeooFc0.jpg",w="/Instruments_2025-3/assets/in05-D0f0Nwn2.jpg",C="/Instruments_2025-3/assets/in06-CCY3mjLl.jpg",Y="/Instruments_2025-3/assets/in07-DSke7PNe.jpg",U="/Instruments_2025-3/assets/in08-Cffekw7m.jpg",P="/Instruments_2025-3/assets/in09-B7A1B4HK.jpg",q="/Instruments_2025-3/assets/in10-C8QsgQ0Q.jpg",F=[{id:1,img:D,name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:R,name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:J,name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:K,name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:w,name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:C,name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:Y,name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:U,name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"},{id:9,img:P,name:"Культиватор",price:10890,description:"Культиватор електричний Dnipro-M 40"},{id:10,img:q,name:"Лобзик",price:10890,description:"Лобзик електричний Dnipro-M JS-80LX + Набір пиляльних полотен 5 шт"}],S={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},H="/Instruments_2025-3/assets/no_img-LHHwQ-Ik.png";function Q(s){s.code==="Escape"&&this.close()}const x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function v(s,o){const t=Number(s.closest(".js-card").dataset.id);return o.find(({id:i})=>i===t)}const{KEY_BASKET:A}=S;let a=JSON.parse(localStorage.getItem("favorite01"))??[],d=JSON.parse(localStorage.getItem(A))??[];console.log(a);function N(s,o){const t=v(s,o);console.log(t),console.log(a);const i=a.some(e=>e.id===t.id);console.log(i),i?(console.log("if"),console.log(t),a=a.filter(e=>e.id!==t.id),localStorage.setItem("favorite01",JSON.stringify(a))):(console.log("else"),console.log(t),t.presentFuv=1,a.push(t),console.log(a),localStorage.setItem("favorite01",JSON.stringify(a)))}function f(s,o){const t=v(s,o);d.some(({id:e})=>e===t.id)?(d=d.filter(e=>e.id!==t.id),localStorage.setItem(A,JSON.stringify(d)),o=o.map(e=>{e.id===t.id&&(e.presentBas=0)})):(t.presentBas=1,d.push(t),localStorage.setItem(A,JSON.stringify(d)),o=o.map(e=>{e.id===t.id&&(e.presentBas=1)}))}const{KEY_BASKET:V,KEY_INSTRUMENT:X}=S,u=JSON.parse(localStorage.getItem(X));let G=JSON.parse(localStorage.getItem("favorite01"))??[];console.log(G);document.querySelector(".favorite_list");const W=document.querySelector(".checkout_list"),j=document.getElementById("index"),B=document.getElementById("favorite"),L=document.getElementById("basket");function Z({img:s,name:o,price:t,description:i,id:e,presentFuv:n,presentBas:c}){let g=JSON.parse(localStorage.getItem("favorite01"))??[];console.log(g);const p=$.create(`
	    <div class="modal js-card" data-id=${e}>
            <div class="cross">
                 <img src=${x} alt="close">
            </div>
            <img src="${s}" alt="${o}" width="300">
            <h2>${o} <span>id${e}</span></h2>
            <h3>${t}point</h3>
                <p>${n}</p>
                <p>${c}</p>

            <p>${i}</p>
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
`,{handler:null,onShow(r){this.handler=Q.bind(r),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),y.removeEventListener("click",h)}});p.show();const y=document.querySelector(".cross");y.addEventListener("click",h);function h(){p.close()}const k=document.querySelector(".modal");document.querySelector("div.modal button.js-favorite"),k.addEventListener("click",_);function _(r){if(r.target.closest(".js-favorite")&&(r.target.closest(".js-favorite"),j)){N(r.target,u);let m=JSON.parse(localStorage.getItem("favorite01"))??[];console.log(m)}if(r.target.closest(".js-basket")){const m=r.target.closest(".js-basket"),M=m.querySelector(".yes"),O=m.querySelector(".no");if(M.classList.toggle("vis"),O.classList.toggle("vis"),j&&f(r.target,u),L){f(r.target,u);const T=JSON.parse(localStorage.getItem(V))??[];b(T,W)}B&&f(r.target,u)}}}let z="Add to favorite",ee="Remove from",te="Add to basket",se="Remove from";const oe="visible",ne="invisible";function b(s,o){let t;s.length?(t=s.map(({id:i,img:e,name:n,presentFuv:c,presentBas:g})=>`
                    <li data-id=${i} class="card js-card">
                    <img src="${e}" alt="${n}" width="300">
                    <h2>${n}</h2>
                    
                    <span>id${i}</span>
                    
                    <p></p>
                    <p></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
                    <div class="${B??L?ne:oe}">
        <button class="js-favorite" type="button">${c?ee:z}</button>
        <button class="js-basket" type="button">${g?se:te}</button>
                    </div>
                    </li>
                    `).join(""),o.innerHTML=t):(t=`<li class="js-card">
                    <img src=${H} alt="404" width="300">
                    </li>`,o.innerHTML=t)}const{KEY_INSTRUMENT:I}=S,E=document.querySelector(".js-list");localStorage.setItem(I,JSON.stringify(F));const l=JSON.parse(localStorage.getItem(I));console.log(l);b(l,E);E.addEventListener("click",ie);function ie(s){if(s.preventDefault(),s.target.classList.contains("js-info")){const o=v(s.target,l),{img:t,name:i,price:e,description:n,id:c,presentFuv:g,presentBas:p}=o;Z({img:t,name:i,price:e,description:n,id:c,presentFuv:g,presentBas:p})}s.target.classList.contains("js-favorite")&&N(s.target,l),s.target.classList.contains("js-basket")&&(f(s.target,l),localStorage.setItem(I,JSON.stringify(l)),b(l,E))}export{b as a,Z as b,S as c,f as d,v as f,N as t};
//# sourceMappingURL=index-DfO1Ig40.js.map
