import AppName from "./components/AppName"
import AddTodo from "./components/addTodo"
import TodoList1 from "./components/TodoList1"
import TodoList2 from "./components/TodoList1"


function App() {

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
        <TodoList1></TodoList1>
        <TodoList2></TodoList2>
      </div>
    </center>
  )
  
}

export default App
