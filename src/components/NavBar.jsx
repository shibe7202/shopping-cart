import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import styles from './NavBar.module.css'

function NavBar() {

    function showCart() {
        //put cart into view
    }

    return (
        <nav className={styles.navBar}>
            <ul className={styles.navLinks}>
                <li className={styles.homeLink}>
                    <Link to='/home'>Home</Link>
                </li>
                <li className={styles.shopLink}>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li className={styles.cartLink}>
                    <button className={styles.cartDisplay} onClick={showCart}>
                        <ShoppingCart />
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar