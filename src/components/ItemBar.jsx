import { useState } from "react";
import styles from './ItemBar.module.css'

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
        <div className={styles.itemBar}>
            <div className={styles.quantitySection}>
                <button className={styles.decrease} name='decrease' onClick={decQuantity}>-</button>
                <div className={styles.amount} name="quantity">{quantity}</div>
                <button className={styles.increase} name="increase" onClick={incQuantity}>+</button>
            </div>
            <div className={styles.addItemSection}>
                <button className={styles.addItemButton} onClick={handleAddItem}>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemBar