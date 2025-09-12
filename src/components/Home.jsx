import NavBar from "./NavBar"
import { useOutletContext } from "react-router-dom"
import styles from './Home.module.css'
import hero from '../assets/pexelsShop3.jpg'


function Home() {
    const cartTools = useOutletContext()

    return (
        <div className={styles.home}>
            <div className={styles.gradient1}></div>
            <div className={styles.gradient2}></div>
            <div className={styles.gradient3}></div>
            <div className={styles.gradient4}></div>
            <NavBar />
            <div className={styles.heroContainer}>
                <div className={styles.heroHeader}>
                    <h1>Shop with us</h1>
                </div>
                <div className={styles.heroImg}>
                    <img src={hero} alt="shop image" className={styles.heroImg} />
                </div>

            </div>
        </div>
    )
}

export default Home