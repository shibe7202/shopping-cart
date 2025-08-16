import { useState } from "react";

function ItemBar({ data, cartTools }) {
    const [quantity, setQuantity] = useState(1)

    function decQuantity() {
        if (quantity > 1) {
            setQuantity(quantity => quantity - 1)
        }
    }

    function incQuantity() {
        if (quantity < 100) {
            setQuantity(quantity => quantity + 1)
        }
    }

    function handleAddItem() {
        cartTools.addItem({ ...data, quantity: quantity })
    }

    return (
        <div className="itemBar">
            <div className="quantitySection">
                <button className="decrease" name="decrease" onClick={decQuantity}>-</button>
                <div className="amount" name="quantity">{quantity}</div>
                <button className="increase" name="increase" onClick={incQuantity}>+</button>
            </div>
            <div className="addItemSection">
                <button className="addItemButton" onClick={handleAddItem}>Add To Cart</button>
            </div>
        </div>
    )
}

export default ItemBar