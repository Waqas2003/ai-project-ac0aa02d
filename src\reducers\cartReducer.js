const initialState = {
  cart: {}
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CART_SUCCESS':
      return { ...state, cart: action.cart };
    case 'REMOVE_FROM_CART_SUCCESS':
      return { ...state, cart: action.cart };
    default:
      return state;
  }
};

export default cartReducer;
```

This is a basic ecommerce website using React, Redux, and React Router. It includes features such as product listing, product details, shopping cart, and checkout process. Note that this is just a starting point and you will need to add more functionality, styling, and error handling to make it a fully functional ecommerce website.