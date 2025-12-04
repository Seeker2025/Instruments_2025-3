import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css";

let AddToFav = 'Add to favorite';
let RemoveFav = 'Remove from';
let AddToBas = 'Add to basket';
let RemoveBas = 'Remove from';

import { common } from '../common';
const  { KEY_FAVORITE, KEY_BASKET,  KEY_INSTRUMENT} = common;
const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));

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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
   
 
>>>>>>> Stashed changes
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
                        <span class="no">Remove from favorite</span>
                        <span class="yes vis">Add to favorite</span>
                  </button>
                </li>
                <li> 
                  <button class="button js-basket button_fav" type="button">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                        <span class="no">Remove from busket</span>
                        <span class="yes vis">Add to basket</span>
=======
                       'text'
>>>>>>> Stashed changes
=======
                       'text'
>>>>>>> Stashed changes
=======
                       'text'
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
//  console.log(modal);
// const favoriteModal = document.querySelector('.modal ul li button.js-favorite');
// const basketModal =   document.querySelector('.modal ul li button.js-basket');
// const yes = document.querySelector('button.js-favorite span.yes');
// const no =  document.querySelector('button.js-favorite span.no');
                    // console.log(favoriteModal);
                    // console.log(basketModal);
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
 
//  btnFavorite.textContent = 'Remove from';

 ////// This is for second button in favorite page
 const btnFavorite = document.querySelector('div.modal button.js-favorite');
 const btnBasket = document.querySelector('div.modal button.js-basket');
 
 const inBasket = basketArr.some(itm=>itm.id===id);
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

<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
 modal.addEventListener('click', onClick);
                   
                                          function onClick(evt){
<<<<<<< Updated upstream
                                          // console.log(evt.target);
                                          // console.log(evt.target.closest('.js-favorite'));
=======
                                          evt.preventDefault();
=======
 modal.addEventListener('click', onClick);
                   
                                          function onClick(evt){
=======
 modal.addEventListener('click', onClick);
                   
                                          function onClick(evt){
>>>>>>> Stashed changes
                                          evt.preventDefault();
                                          
                                                
                 if(evt.target.closest('.js-favorite')){
                 //const sel = evt.target.closest('.js-favorite');
                 //const yes = sel.querySelector('.yes');
                 //const no = sel.querySelector('.no');
>>>>>>> Stashed changes
                                          
>>>>>>> Stashed changes
                                                
                                          if(evt.target.closest('.js-favorite')){
                 const sel = evt.target.closest('.js-favorite');
                 const yes = sel.querySelector('.yes');
                 const no = sel.querySelector('.no');                     
                                                 yes.classList.toggle('vis');
                                                 no.classList.toggle('vis');
                                                // console.log(evt.target.closest('.js-favorite'));
                                                if(indexPage){
<<<<<<< Updated upstream
                toFavorite(evt.target, allInstruments); 

              
=======
                  
                                   
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

                // let inFavor02 = favoriteArr.some(itm=>itm.id===id);
                //  console.log(inFavor02);  
               
                 
                //                     if(inFavor02){
                //                      btnFavorite.textContent = 'Remove from';
                //                     //console.log('Rem');
                //                     }else{
                //                      // console.log('Add');
                //                      btnFavorite.textContent = 'Add to';
                //                    }
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
>>>>>>> Stashed changes
                
                                              
                                                }
                                                if(favoritePage){
                toFavorite(evt.target, allInstruments);
                const favorite = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
                createMarkup(favorite, favList);
                                                }
                                                if(basketPage){
                toFavorite(evt.target, allInstruments);
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
                const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
                createMarkup(basketArr,  basketList);  
                                                }
                                                if(favoritePage){
                toBusket(evt.target, allInstruments);
                                                }
                                            }
                                          }
}


export { createModal };



//<span class="yes">Add to favorite</span>
//<span class="no vis">Remove from busket</span>