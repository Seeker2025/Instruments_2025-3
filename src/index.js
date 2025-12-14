
import { instruments    } from './instruments';
import { common         } from './common';
import { createMarkup   } from './helpers/createMarkup';
import { createModal    } from './helpers/createModal';
import { 
         toFavorite,
         toBusket
                        } from './helpers/favoriteFun';
import { findProduct    } from './helpers/findProduct';
const  { KEY_FAVORITE, KEY_BASKET, KEY_INSTRUMENT }   =   common;

const jsList = document.querySelector('.js-list');

localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(instruments));
const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));

console.log(allInstruments);
createMarkup(allInstruments, jsList);


jsList.addEventListener('click', onClick);

function onClick(evt){
    evt.preventDefault();
       
    if(evt.target.classList.contains('js-info')){
       
            const product = findProduct(evt.target);
            const{img, name, price, description, id, presentFuv, presentBas} = product
            createModal({img, name, price, description, id, presentFuv, presentBas})
       
    }
    if(evt.target.classList.contains('js-favorite')){
            
            toFavorite(evt.target)
      
       
  }    

     if(evt.target.classList.contains('js-basket')){
        
            toBusket(evt.target);
             
    }
}

export { allInstruments };