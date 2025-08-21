const Container = (props)=> {

    return (
        <>
            <div className="border-1 w-100 p-4 m-auto">
                {props.children}
            </div>
        </>
    )
    
}

export default Container;