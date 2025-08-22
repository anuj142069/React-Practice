import Item from "./Item";

const FoodItems = ({items}) => {

    // let foodItems = [];
    
    return(
        
        <ul className="list-group">
            {items.map((item) =>
                <Item 
                key={item} 
                foodItem={item} 
                handleBuyButton={()=> console.log(`${item} Baught`)}></Item>
            )}
        </ul>
    )

};

export default FoodItems;