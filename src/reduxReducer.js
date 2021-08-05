const initialState = {
    itemsCart:[ ]
}

const cartReducer  =  ( state = initialState , action )=>{

if(action.type === 'ADD_ITEM'){
    const addCart = initialState.itemsCart.push(action.item)
  
   return { ...state }
}
return state;

}

export default cartReducer;