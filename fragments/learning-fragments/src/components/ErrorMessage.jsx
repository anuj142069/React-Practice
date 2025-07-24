const ErrorMessage = () => {
    
    // let foodItems = [];
    
    let foodItems = ["Dal","Green Vegetable","Roti","Salad","Milk","Ghee"];

    // let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null

    return(
        <>
            {/* {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null}; */}
            {/* {emptyMessage} */}
            {foodItems.length === 0 && <h3>I am still hungry.</h3>}
        </>
    )
}

export default ErrorMessage;