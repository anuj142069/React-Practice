import React from "react"

function App() {

  let foodItems = [];
  // let foodItems = ["Dal","Green Vegetable","Roti","Salad","Milk","Ghee"];

  // let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null

  return (
    <>
      <h1 className="text-4xl font-bold">Healthy Food</h1>
      {/* {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null}; */}
      {/* {emptyMessage} */}
      {foodItems.length === 0 && <h3>I am still hungry.</h3>}
      <ul className="list-group">
        {foodItems.map((item) =>
            <li key={item}>{item}</li>
        )}
      </ul>
    </>
  )
}

export default App
