import Item from "./item";

const FoodItems = () => {

    // let foodItems = [];
    
    let foodItems = ["Dal","Green Vegetable","Roti","Salad","Milk","Ghee"];

    return(
        
        <ul className="list-group">
            {foodItems.map((item) =>
                <Item key={item} foodItem={item}></Item>
            )}
        </ul>
    )

};

export default FoodItems