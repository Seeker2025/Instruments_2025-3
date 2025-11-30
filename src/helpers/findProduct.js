function findProduct(elem, arr){
    const productId = Number(elem.closest('.js-card').dataset.id)
   let arr01 = arr.find(({id}) => id === productId);
    return arr01;
}


export { findProduct };