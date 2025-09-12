import ItemBar from "./ItemBar"
import styles from './Card.module.css'
import { Info } from "lucide-react"

function Card({ data, cartTools }) {

    function shortenDescription(description, charLimit) {
        if (description.length < charLimit) {
            return description
        } else {
            let newDescription = description.slice(0, charLimit)
            while (!(/^[a-zA-Z]$/.test(newDescription[newDescription.length - 1]))) {
                newDescription = newDescription.slice(0, -1)
            }
            newDescription += '...'
            return newDescription
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.imgContainer}>
                <img src={data.image} alt={data.title} className={styles.img} />
            </div>
            <div className={styles.infoContainer}>
                <h2 className={styles.itemTitle}>{shortenDescription(data.title, 60)}</h2>
                <p className={styles.itemDescription} placeholder='description'>{shortenDescription(data.description, 85)}</p>
                <p className={styles.itemPrice}>{'$' + data.price}</p>
                <ItemBar data={data} cartTools={cartTools} />
            </div>
        </div>
    )
}

export default Card