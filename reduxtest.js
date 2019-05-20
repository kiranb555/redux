// importing the store
const { createStore } = require("redux");

// create initial state
const InitialState = {
  age: 23,
  name: "KIRAN"
};

// reducer function which accepts initial state and action
function myReducer(state = InitialState, action) {
  const newState = { ...state };

  if (action.type === "ADD") {
    newState.age += action.payload;
  }
  if (action.type === "SUB") {
    newState.age -= action.payload;
  }
  return newState;
}

// creating store and which accepts reducer
const store = createStore(myReducer);

// every time state changes subscribe runs below
store.subscribe(() => {
  console.log("state changed", JSON.stringify(store.getState()));
});

// dispatch is the one which passes an action from component to reducer
store.dispatch({ type: "ADD", payload: 10 });

store.dispatch({ type: "SUB", payload: 5 });

console.log(store.getState());

// to run this ===> node reduxtest.js
