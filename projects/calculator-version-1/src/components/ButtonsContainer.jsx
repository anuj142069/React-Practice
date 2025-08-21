const ButtonsContainer = ()=>{

    const buttonNames = ['1', '2', '3', '*', '4', '5', '6', '+', '7', '8', '9', '-', 'C', '0', '.', '/'];
    

    return <>
        <div id="button-container">
            {buttonNames.map(buttonName => 
                <button className="bg-gray-100 p-2 pr-4 pl-4 rounded m-1">{buttonName}</button>
            )}
        </div>
    </>

}

export default ButtonsContainer;