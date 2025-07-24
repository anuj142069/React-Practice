import Item from "./item";

const FoodItems = ({items}) => {

    // let foodItems = [];
    
    return(
        
        <ul className="list-group">
            {items.map((item) =>
                <Item key={item} foodItem={item}></Item>
            )}
        </ul>
    )

};

export default FoodItems;