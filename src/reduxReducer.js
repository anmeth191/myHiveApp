const initialState = {
    itemsCart:[ ] 
                
}
let updateQuantity = 0;
const cartReducer  =  ( state = initialState , action )=>{

if(action.type === 'ADD_ITEM'){
    let newItem = state.itemsCart.concat({ items:action.item , quantity:action.itemsquantity })     
   return { ...state  , itemsCart:newItem}
} else
if(action.type === 'UPDATE_ITEM'){
 
    updateQuantity = state.itemsCart[action.itemIndex].quantity ;
    console.log(action.updatequantity );
}
return state;
}

export default cartReducer;