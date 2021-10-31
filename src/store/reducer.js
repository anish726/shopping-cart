const initailState = {
  cart: []
}
const cartReducer = (state = initailState, action) => {
  switch (action.type) {
    case 'ADDTOCART':
      console.log(action);
      const itemExits = state.cart.find((item) => item.id === action.payload.id);
      console.log(itemExits);
      if (itemExits) {
        itemExits.quantity++;
      }
      else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
      return {
        ...state
      }
    case 'ADDQTY':
      return {
        ...state,
        cart: state.cart.map(product =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        ),
      };
    case 'DECQTY':
      return {
        ...state,
        cart: state.cart.map(product =>
          product.id === action.payload
            ? {
              ...product,
              quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
            }
            : product,
        ),
      };
      case 'REMOVETOCART':
        return{
          ...state,
          cart: state.cart.filter((item, id) => item.id !== action.payload)
        }
    default: return state;
  }
}
export default cartReducer;