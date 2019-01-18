export const addToCart = obj => ({
    type: 'ADD_TO_CART',
    payload: obj
}); 

export const removeFromCart = id => ({
    type: 'REMOVE_FORM_CART',
    payload: id
}); 