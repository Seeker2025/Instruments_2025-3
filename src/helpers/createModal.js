import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css";

let AddToFav = 'Add to favorite';
let RemoveFav = 'Remove from';
let AddToBas = 'Add to basket';
let RemoveBas = 'Remove from';

import { instruments    } from '../instruments';

import { common } from '../common';
const  { KEY_FAVORITE, KEY_BASKET,  KEY_INSTRUMENT} = common;
// const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
let favoriteArr = JSON.parse(localStorage.getItem('favorite01')) ?? [];

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
const indexPage = document.getElementById('index');
export const favoritePage = document.getElementById('favorite');
export const basketPage = document.getElementById('basket');

function createModal({img, name, price, description, id, presentFuv, presentBas}){
  // let favoriteArr = JSON.parse(localStorage.getItem('favorite01')) ?? [];
    const btnFavorite = document.querySelector('div.modal button.js-favorite');
      // if(favoriteArr.some((itm)=>itm.id ===id)){
      //             //  btnFavorite.textContent='No'; 
      //             console.log('Yes');
      //             }else{
      //             //  btnFavorite.textContent='Add';
      //             } 
  console.log(favoriteArr);
     const instance = basicLightbox.create(`
	    <div class="modal js-card" data-id=${id}>
            <div class="cross">
                 <img src=${closeIcon} alt="close">
            </div>
            <img src="${img}" alt="${name}" width="300">
            <h2>${name} <span>id${id}</span></h2>
            <h3>${price}point</h3>
                <p>${presentFuv}</p>
                <p>${presentBas}</p>

            <p>${description}</p>
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
                    // console.log(cross);
                    cross.addEventListener('click', toClose);
                    function toClose(){
                    // console.log('whoa!');
                    instance.close();
                    }

 const modal = document.querySelector('.modal');
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
                 const sel = evt.target.closest('.js-favorite');
                 //const yes = sel.querySelector('.yes');
                 //const no = sel.querySelector('.no');
                             ;                    
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
                                                  
                                          // console.log(allInstruments);  
// const allInstruments02 = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
                toFavorite(evt.target, instruments); 
//  let favoriteArr = JSON.parse(localStorage.getItem('favorite01')) ?? [];               
   
              
                
                                              
                                                }
                                                 if(favoritePage){
                                                  
                                                  console.log('Hi');
                toFavorite(evt.target, favoriteArr);
                const favorite02 = JSON.parse(localStorage.getItem('favorite01')) ?? [];
                createMarkup(favorite02, favList);

                //if(favoriteArr.some((itm)=>itm.id ===id)){
                //   btnFavorite.textContent='No'; 
                //  }else{
                //   btnFavorite.textContent='Add';
                //  }  
                //                                 }
                //                                 if(basketPage){
                // toFavorite(evt.target, allInstruments);
                                                }
                                            }
 
                                          if(evt.target.closest('.js-basket')){
                                                // console.log(evt.target.closest('.js-basket'));
                 const sel = evt.target.closest('.js-basket');
                 const yes = sel.querySelector('.yes');
                 const no = sel.querySelector('.no');                              
                                                 yes.classList.toggle('vis');
                                                 no.classList.toggle('vis');

                                                if(indexPage){
                toBusket(evt.target, allInstruments);
                                                }
                                                if(basketPage){
                toBusket(evt.target, allInstruments);
                console.log(id);  
                const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
                createMarkup(basketArr,  basketList);  
                                                }
                                                if(favoritePage){
                toBusket(evt.target, allInstruments);
                console.log('id'); 
                                                }
                                            }
                                          }
}


export { createModal };



//<span class="yes">Add to favorite</span>
//<span class="no vis">Remove from busket</span>