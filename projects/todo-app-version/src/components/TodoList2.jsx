function TodoList2(){
    return(
        <div className="row items-center mt-4 w-150 flex">
          <div className="flex-1/2 text-start">
            Go To College
          </div>
          <div className="flex-1/3">
            14/10/2002
          </div>
          <div className="flex-1/4">
            <button className="bg-red-700 text-white pt-2 pb-2 pl-4 pr-4 rounded ">Delete</button>
          </div>
        </div>
    )
}

export default TodoList2;