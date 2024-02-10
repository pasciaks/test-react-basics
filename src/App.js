import React, {useReducer} from "react";

import Header from "./components/Header";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Footer from "./components/Footer";
import Main from "./components/Main";

import MealsProvider from "./providers/MealsProvider";

import "./App.css";

import MealsList from "./components/MealsList";

const reducer = (state, action) => {
  switch (action.type) {
    case "RIDE":
      return {
        money: state.money + 10,
      };
    case "FUEL":
      return {
        money: state.money -50,
      };
    default:
      return state;
  }
}


function App(props) {

  const initalState = {money:100};
  const [state, dispatch] = useReducer(reducer, initalState);
  
  return (
    <>
    <h1>{props.title}</h1>
    <h2>{state.money}</h2>
    <div>
      <button onClick={() => dispatch({type: "RIDE"})}>Ride</button>
      <button onClick={() => dispatch({type: "FUEL"})}>Fuel</button>
    </div>
    <MealsProvider>
      <Header />
      <Main />
      <MealsList />
      <Promo />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />
      </MealsProvider>
    </>
  );
}

export default App;
