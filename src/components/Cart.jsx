import styles from './Cart.module.css'
import { ShoppingCart } from 'lucide-react';

function Cart({ cartTools }) {
    return (
        <div className={cartTools.visible ? `${styles.cart} ${styles.visible}` : styles.cart} id='cart'>
            <div className={styles.head}>
                <p>Shopping Cart</p>
            </div>
            <div className={styles.itemList}>
                {cartTools.items ? cartTools.items.map(item =>
                    <div key={item.id} className={styles.shopItem}>
                        <div>
                            <p className={styles.itemName}>{item.title + ' x ' + item.quantity}</p>
                            <p className={styles.price}>{'$' + item.price}</p>
                        </div>
                        <button className={styles.remove} onClick={() => cartTools.removeItem(item)}>Remove</button>
                    </div>
                ) : null}
            </div>
            <button className={styles.checkout}>Checkout</button>
        </div>
    )
}

export default Cart