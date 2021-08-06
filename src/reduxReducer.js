const initialState = {
    itemsCart:[ ] 
                
}

const cartReducer  =  ( state = initialState , action )=>{

if(action.type === 'ADD_ITEM'){
    let newItem = state.itemsCart.concat({ items:action.item , quantity:action.itemsquantity })     
   return { ...state  , itemsCart:newItem}
}
return state;
}

export default cartReducer;