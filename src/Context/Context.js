
import { createContext, useContext, useReducer } from "react";
import { cartReducer,searchReducer } from "./Reducers";


const Cart = createContext();

const Context = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, {
    cart: 0,
  });

  const [searchString, dispatchSearch] = useReducer(searchReducer, {
    searchString: '',
  });


  return (
    <Cart.Provider value={{ state, dispatch ,searchString,dispatchSearch}}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;