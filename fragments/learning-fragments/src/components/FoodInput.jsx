const FoodInput = ({handleKeyDown})=>{

    
    return (
        <>
            <input 
                type="text" 
                placeholder="Enter Food Item here" className="border mb-2 rounded p-2 text-center w-full" 
                onKeyDown={handleKeyDown}
            />
        </>
    )

}

export default FoodInput;