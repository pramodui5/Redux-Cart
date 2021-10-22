import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of state
// reducer - function that used to update the store
// two arguments - state, action
// state - old state/state before update
// return updated or old state 

import { createStore } from "redux";
// initial store
const initialStore = {
  count: 78
}

// reducer
function reducer(state, action){
  console.log({state, action});
  if(action.type === "DECREASE"){
    //state.count = state.count - 1;
    return {count: state.count - 1}
  }
  if(action.type === "INCREASE"){
    //state.count = state.count - 1;
    return {count: state.count + 1}
  }
  if(action.type === "RESET"){
    //state.count = state.count - 1;
    return {count: 0}
  }
  return state;
}

// store
const store = createStore(reducer, initialStore);
store.dispatch({ type: 'DECREASE' })
store.dispatch({ type: 'RESET' })
store.dispatch({ type: 'INCREASE' })
console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
