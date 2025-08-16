import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';

function NavBar() {

    function showCart() {
        //put cart into view
    }

    return (
        <nav className="navBar">
            <ul className="navLinks">
                <li className="homeLink">
                    <Link to='/home'>Home</Link>
                </li>
                <li className="shopLink">
                    <Link to='/shop'>Shop</Link>
                </li>
                <li className="cartLink">
                    <button className="cartDisplay" onClick={showCart}>
                        <ShoppingCart />
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar