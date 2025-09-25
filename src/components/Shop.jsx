import useItemURL from './useItemUrl';
import Card from './Card'
import Cart from './Cart'
import NavBar from './NavBar';
import { useOutletContext } from 'react-router-dom';
import styles from './Shop.module.css'

function Shop() {
    const cartTools = useOutletContext()
    const { itemURL, error, loading } = useItemURL()

    return (
        <div className={styles.shop}>
            <NavBar cartTools={cartTools} />
            <Cart cartTools={cartTools} />
            <p className={styles.loading}>{loading ? 'Loading...' : null}</p>
            <p className={styles.error}>{error ? 'A network error has occurred' : null}</p>
            <div className={styles.cardGrid}>
                {itemURL ? itemURL.map(data =>
                    <Card data={data} cartTools={cartTools} key={data.id} />
                ) : null}

            </div>

        </div>
    )
}

export default Shop