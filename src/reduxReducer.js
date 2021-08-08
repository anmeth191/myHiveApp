const initialState = {
    itemsCart:[ ] 
                
}

const cartReducer  =  ( state = initialState , action )=>{

if(action.type === 'ADD_ITEM'){
    
    let newItem = state.itemsCart.concat({ items:action.item , quantity:action.itemsquantity , payment: parseInt(action.item.productPrice) * action.itemsquantity})     
   return { ...state  , itemsCart:newItem}
} else
if(action.type === 'UPDATE_ITEM'){
 
}

return state;
}

export default cartReducer;