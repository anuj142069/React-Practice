const ErrorMessage = ({items}) => {
    
    // let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null

    return(
        <>
            {/* {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null}; */}
            {/* {emptyMessage} */}
            {items.length === 0 && <h3>I am still hungry.</h3>}
        </>
    )
}

export default ErrorMessage;