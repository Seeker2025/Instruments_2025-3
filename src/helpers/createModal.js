import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css";

// let AddToFav = 'Add to favorite';
// let RemoveFav = 'Remove from';
// let AddToBas = 'Add to basket';
// let RemoveBas = 'Remove from';

import { instruments    } from '../instruments';

import { common } from '../common';
const  { KEY_FAVORITE, KEY_BASKET,  KEY_INSTRUMENT} = common;
// const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];

// console.log(allInstruments);
// import { allInstruments } from '../index';
// console.log(allInstruments);

import {  closeMadal } from './closeModal';
import { createMarkup } from './createMarkup';
import    closeIcon from '../img/close.png';
import { 
          toFavorite,
          toBusket,
                     } from './favoriteFun';

const favList = document.querySelector('.favorite_list');
const basketList = document.querySelector('.checkout_list');

export const indexPage = document.getElementById('index');
export const favoritePage = document.getElementById('favorite');
export const basketPage = document.getElementById('basket');


function createModal({img, name, price, description, id, presentFuv, presentBas}){
  
 
     const instance = basicLightbox.create(`
	    <div class="modal js-card" data-id=${id}>
            <div class="cross">
                 <img src=${closeIcon} alt="close">
            </div>
            <img src="${img}" alt="${name}" width="300">
            <h2>${name} <span>id${id}</span></h2>
            <h3>${price}point</h3>
                

            <p>${description}</p>
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
`, {
    handler: null,
    onShow(instance){
      // console.log(this);
      this.handler = closeMadal.bind(instance);
      document.addEventListener('keydown', this.handler);

  },
    onClose(){
      // console.log(this);
      document.removeEventListener('keydown', this.handler);
      cross.removeEventListener('click', toClose);
  },
  
});


instance.show();

                    const cross = document.querySelector('.cross');
                    cross.addEventListener('click', toClose);
                    function toClose(){
                    instance.close();
                    }

 const modal = document.querySelector('.modal');
 const btnFavorite = document.querySelector('div.modal button.js-favorite');
 btnFavorite.textContent = 'Remove from';

 ////// This is for second button in favorite page
 const btnBasket = document.querySelector('div.modal button.js-basket');
 const inBasket = basketArr.some(itm=>itm.id===id);
//  console.log(inBasket);
 if(inBasket){
    btnBasket.textContent = 'Remove from';
 }else{
    btnBasket.textContent = 'Add to';
 }
 
 const inFavor = favoriteArr.some(itm=>itm.id===id);
 console.log(inFavor);
if(inFavor){
  btnFavorite.textContent = 'Remove from';
}else{
  btnFavorite.textContent = 'Add to';
}

//  console.log(inFavor);  
//  console.log(modal);
// const favoriteModal = document.querySelector('.modal ul li button.js-favorite');
// const basketModal =   document.querySelector('.modal ul li button.js-basket');

// const no =  document.querySelector('button.js-favorite span.no');
                    // console.log(favoriteModal);
                    // console.log(basketModal);
 modal.addEventListener('click', onClick);
                    // console.log(favoritePage);
                    // console.log(basketPage);
                    // console.log(indexPage);
                                          function onClick(evt){
                                          evt.preventDefault();
                                          // console.log(evt.target);
                                          // console.log(evt.target.closest('.js-favorite'));
                                                
                 if(evt.target.closest('.js-favorite')){
                 //const sel = evt.target.closest('.js-favorite');
                 //const yes = sel.querySelector('.yes');
                 //const no = sel.querySelector('.no');
                                          
                                                // yes.classList.toggle('vis');
                                                // no.classList.toggle('vis');
                                                // console.log(evt.target.closest('.js-favorite'));
                                                if(indexPage){
                  
                                   
                // if(favoriteArr.some((itm)=>itm.id ===id)){
                //   btnFavorite.textContent='No'; 
                //  }else{
                //   btnFavorite.textContent='Add';
                //  }   
    // const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
    
                // if(inFavor){
                //  btnFavorite.textContent = 'Remove from';
                //console.log('No');
                // }else{
                //  btnFavorite.textContent = 'Add to';
                // console.log('Yes!');
                // }                                 
                                          // console.log(allInstruments);  
// const allInstruments02 = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
                toFavorite(evt.target, instruments);
               
//  let favoriteArr = JSON.parse(localStorage.getItem('favorite01')) ?? [];               
                                               
                                                }
                                                 if(favoritePage){
                                                  
                                                
                toFavorite(evt.target, favoriteArr);
                const favoriteLoc = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
                createMarkup(favoriteLoc, favList);
// console.log(btnFavorite.textContent);
                if(btnFavorite.textContent === 'Add to'){
                btnFavorite.textContent = 'Remove from';
                }else{
                btnFavorite.textContent = 'Add to';
                } 
                //if(favoriteArr.some((itm)=>itm.id ===id)){
                //   btnFavorite.textContent='No'; 
                //  }else{
                //   btnFavorite.textContent='Add';
                //  }  
                                                 }
                                                 if(basketPage){
                console.log('a');
                console.log('a');
                
                let  favoriteLoc = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];                                  
                toFavorite(evt.target, favoriteLoc);
                if(btnFavorite.textContent === 'Remove from'){
                btnFavorite.textContent = 'Add to';
                }else{
                btnFavorite.textContent = 'Remove from';
                } 
                // let basketArrLoc = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];                                  
                // toBusket(evt.target, basketArrLoc);
                //const basketLoc = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
                // createMarkup(basketLoc, favList);
                                                }
 

                                            }
                                         




                                          
 
                if(evt.target.closest('.js-basket')){
                                                // console.log(evt.target.closest('.js-basket'));
                //  const sel = evt.target.closest('.js-basket');
                //  const yes = sel.querySelector('.yes');
                //  const no = sel.querySelector('.no');                              
                //                                  yes.classList.toggle('vis');
                //                                  no.classList.toggle('vis');

                                                if(indexPage){
                toBusket(evt.target, basketArr);
                                                }
                                                if(basketPage){
                 console.log("d")                                 
                 console.log("d")                                 
                toBusket(evt.target, basketArr);
                const basketArrLoc = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
                createMarkup(basketArrLoc, basketList);
                if(btnBasket.textContent === 'Remove from'){
                btnBasket.textContent = 'Add to';
                }else{
                btnBasket.textContent = 'Remove from';
                }  
                                                
                // toBusket(evt.target, allInstruments);
                // console.log(id);  
                //
                // createMarkup(basketArr,  basketList);  
                                                }
                                                if(favoritePage){
                let basketArrLoc = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];                                  
                toBusket(evt.target, basketArrLoc);
                if(btnBasket.textContent === 'Remove from'){
                btnBasket.textContent = 'Add to';
                }else{
                btnBasket.textContent = 'Remove from';
                } 
                // console.log('id'); 
                                                }
                                            }
                                          }
}


export { createModal };


