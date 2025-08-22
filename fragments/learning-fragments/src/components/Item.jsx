import styles from "./Item.module.css";

const Item = ({foodItem, handleBuyButton}) =>{

    return(
        <li className={`${styles['kg-item']}`}>
            <span className={`${styles['kg-span']}`}>{foodItem}
                <button className="float-end bg-yellow-400 pr-4 pl-4 text-white rounded pb-1"
                onClick={handleBuyButton}
                >Buy</button>
            </span>
        </li>
    )
};

export default Item;