import React from "react"
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {

  // let foodItems = [];
  // let foodItems = ["Dal","Green Vegetable","Roti","Salad","Milk","Ghee"];

  // let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null

  return (
    <>
      <h1 className="text-4xl font-bold">Healthy Food</h1>
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </>
  )
}

export default App
