import React from "react";

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

function App(props) {
  return (
    <>
    <h1>{props.title}</h1>
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
