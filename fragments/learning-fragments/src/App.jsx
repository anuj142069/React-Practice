import React from "react"
import Container from "./components/Container";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {

  // let foodItems = [];
  // let foodItems = ["Dal", "Sabzi", "Green Vegetable","Roti","Salad","Milk","Ghee"];

  // let [textToShow, setTextShow] = useState();
  let [foodItems, setFoodItems] = useState(["Salad", "Green Vegetable", "Roti"])

  // let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null

  const onKeyDown = (event)=>{
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  }
  return (
    <Container>
      <h1 className="text-4xl font-bold text-yellow-950 text-center p-2">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  )
}

export default App
