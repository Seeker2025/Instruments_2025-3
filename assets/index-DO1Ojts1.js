import{b as R}from"./vendor-BfMHouvv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();const T="/Instruments_2025-3/assets/in01-DDtRZv0L.jpg",D="/Instruments_2025-3/assets/in02-BLtyIFcg.jpg",$="/Instruments_2025-3/assets/in03-DxX5vNo9.jpg",K="/Instruments_2025-3/assets/in04-BFeooFc0.jpg",w="/Instruments_2025-3/assets/in05-D0f0Nwn2.jpg",J="/Instruments_2025-3/assets/in06-CCY3mjLl.jpg",C="/Instruments_2025-3/assets/in07-DSke7PNe.jpg",Y="/Instruments_2025-3/assets/in08-Cffekw7m.jpg",U="/Instruments_2025-3/assets/in09-B7A1B4HK.jpg",q="/Instruments_2025-3/assets/in10-C8QsgQ0Q.jpg",P=[{id:1,img:T,name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:D,name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:$,name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:K,name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:w,name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:J,name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:C,name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:Y,name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"},{id:9,img:U,name:"Культиватор",price:10890,description:"Культиватор електричний Dnipro-M 40"},{id:10,img:q,name:"Лобзик",price:10890,description:"Лобзик електричний Dnipro-M JS-80LX + Набір пиляльних полотен 5 шт"}],I={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},H="/Instruments_2025-3/assets/no_img-LHHwQ-Ik.png";function Q(s){s.code==="Escape"&&this.close()}const F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function y(s,o){const e=Number(s.closest(".js-card").dataset.id);return o.find(({id:i})=>i===e)}const{KEY_BASKET:v}=I;let a=JSON.parse(localStorage.getItem("favorite01"))??[],g=JSON.parse(localStorage.getItem(v))??[];console.log(a);function N(s,o){const e=y(s,o);console.log(e),console.log(a);const i=a.some(t=>t.id===e.id);console.log(i),i?(console.log("if"),console.log(e),a=a.filter(t=>t.id!==e.id),localStorage.setItem("favorite01",JSON.stringify(a))):(console.log("else"),console.log(e),a.push(e),console.log(a),localStorage.setItem("favorite01",JSON.stringify(a)))}function f(s,o){const e=y(s,o);g.some(({id:t})=>t===e.id)?(g=g.filter(t=>t.id!==e.id),localStorage.setItem(v,JSON.stringify(g)),o=o.map(t=>{t.id===e.id&&(t.presentBas=0)})):(e.presentBas=1,g.push(e),localStorage.setItem(v,JSON.stringify(g)),o=o.map(t=>{t.id===e.id&&(t.presentBas=1)}))}const{KEY_BASKET:x,KEY_INSTRUMENT:k}=I,b=JSON.parse(localStorage.getItem(k));document.querySelector(".favorite_list");const V=document.querySelector(".checkout_list"),B=document.getElementById("index"),_=document.getElementById("favorite"),M=document.getElementById("basket");function X({img:s,name:o,price:e,description:i,id:t,presentFuv:n,presentBas:c}){const d=R.create(`
	    <div class="modal js-card" data-id=${t}>
            <div class="cross">
                 <img src=${F} alt="close">
            </div>
            <img src="${s}" alt="${o}" width="300">
            <h2>${o} <span>id${t}</span></h2>
            <h3>${e}point</h3>
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
`,{handler:null,onShow(r){this.handler=Q.bind(r),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),m.removeEventListener("click",L)}});d.show();const m=document.querySelector(".cross");m.addEventListener("click",L);function L(){d.close()}document.querySelector(".modal").addEventListener("click",O);function O(r){if(r.target.closest(".js-favorite")){const p=r.target.closest(".js-favorite"),A=p.querySelector(".yes"),S=p.querySelector(".no");if(A.classList.toggle("vis"),S.classList.toggle("vis"),B){const u=JSON.parse(localStorage.getItem(k));console.log(u),N(r.target,u)}}if(r.target.closest(".js-basket")){const p=r.target.closest(".js-basket"),A=p.querySelector(".yes"),S=p.querySelector(".no");if(A.classList.toggle("vis"),S.classList.toggle("vis"),B&&f(r.target,b),M){f(r.target,b);const u=JSON.parse(localStorage.getItem(x))??[];E(u,V)}_&&f(r.target,b)}}}let G="Add to favorite",W="Remove from",Z="Add to basket",z="Remove from";const tt="visible",et="invisible";function E(s,o){let e;s.length?(e=s.map(({id:i,img:t,name:n,presentFuv:c,presentBas:d})=>`
                    <li data-id=${i} class="card js-card">
                    <img src="${t}" alt="${n}" width="300">
                    <h2>${n}</h2>
                    
                    <span>id${i}</span>
                    
                    <p></p>
                    <p></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
                    <div class="${_??M?et:tt}">
        <button class="js-favorite" type="button">${c?W:G}</button>
        <button class="js-basket" type="button">${d?z:Z}</button>
                    </div>
                    </li>
                    `).join(""),o.innerHTML=e):(e=`<li class="js-card">
                    <img src=${H} alt="404" width="300">
                    </li>`,o.innerHTML=e)}const{KEY_INSTRUMENT:h}=I,j=document.querySelector(".js-list");localStorage.setItem(h,JSON.stringify(P));const l=JSON.parse(localStorage.getItem(h));console.log(l);E(l,j);j.addEventListener("click",st);function st(s){if(s.preventDefault(),s.target.classList.contains("js-info")){const o=y(s.target,l),{img:e,name:i,price:t,description:n,id:c,presentFuv:d,presentBas:m}=o;X({img:e,name:i,price:t,description:n,id:c,presentFuv:d,presentBas:m})}s.target.classList.contains("js-favorite")&&N(s.target,l),s.target.classList.contains("js-basket")&&(f(s.target,l),localStorage.setItem(h,JSON.stringify(l)),E(l,j))}export{E as a,X as b,I as c,f as d,y as f,N as t};
//# sourceMappingURL=index-DO1Ojts1.js.map
