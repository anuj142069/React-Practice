import AppName from "./components/AppName"
import AddTodo from "./components/addTodo"
import TodoItems from "./components/TodoItems"

function App() {

  const todoItems = [
    {
    name: "Buy Milk",
    dueDate: "25/07/2025"
  },
    {
    name: "Go To College",
    dueDate: "25/07/2025"
  },
    {
    name: "Like this video",
    dueDate: "Right Now"
  },
]

  return (
    <center class='todo-container'>
      <AppName></AppName>
      <div className="container ">
        <div className="row items-center mt-8 w-150 flex">
          <div className="flex-1/2">
            <input className="border w-full pt-2 pb-2 pl-4 pr-4 rounded text-center" type="text" placeholder="Enter Todo Here" />
          </div>
          <div className="flex-1/3">
            <input className="border pt-2 pb-2 pl-4 pr-4 rounded" type="date" />
          </div>
          <AddTodo></AddTodo>
        </div>
          <TodoItems todoItems={todoItems}></TodoItems>
      </div>
    </center>
  )
  
}

export default App
