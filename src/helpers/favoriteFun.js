import { common } from '../common';
const{ KEY_FAVORITE, KEY_BASKET, KEY_INSTRUMENT } = common;
// import { instruments } from '../instruments';
import { findProduct } from './findProduct';

let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
console.log(favoriteArr);

function toFavorite(elemFuv){

               const product = findProduct(elemFuv);
               console.log(product);
               
               let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
               const inStorage = favoriteArr.some((itm)=> itm.id === product.id);
                                                  
        if(inStorage){
         
               let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
               favoriteArr = favoriteArr.filter((itm)=>itm.id!==product.id);
               localStorage.setItem( KEY_FAVORITE, JSON.stringify(favoriteArr));
             
          }else{
              
               favoriteArr.push(product);
               localStorage.setItem( KEY_FAVORITE, JSON.stringify(favoriteArr));
                                            
               
               }
  }


 function toBusket(elemBus){
                const product = findProduct(elemBus);
                const inStorage = basketArr.some(({ id })=> id === product.id);
                                                                           
        if(inStorage){
              
               basketArr = basketArr.filter((itm)=>itm.id!==product.id);
               localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
              
          }else{
                            
               basketArr.push(product);
               localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr)); 
                                         
               
          }
 }



export { toFavorite, toBusket };  
