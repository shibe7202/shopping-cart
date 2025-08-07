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


    function QuantitySection() {
        return (
            <div className="quantityButton">
                <button className="decrease" name="decrease" onClick={decQuantity}>-</button>
                <div className="amount" name="quantity">{quantity}</div>
                <button className="increase" name="increase" onClick={incQuantity}>+</button>
            </div>
        )
    }

    function AddItemSection() {
        return (
            <div className="cardAddItem">
                <button className="addItemButton" onClick={cartTools.addItem({ ...data, quantity: quantity })}>Add To Cart</button>
            </div>
        )
    }

    return (
        <div className="itemBar">
            <QuantitySection />
            <AddItemSection />
        </div>
    )
}

export default ItemBar