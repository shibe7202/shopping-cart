import ItemBar from "./ItemBar"
import styles from './Card.module.css'

function Card({ data, cartTools }) {

    function shortenDescription(description) {
        if (description.length < 85) {
            return description
        } else {
            let newDescription = description.slice(0, 85)
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
            <h2 className={styles.itemTitle}>{data.title}</h2>
            <p className={styles.itemDescription} placeholder='description'>{shortenDescription(data.description)}</p>
            <p className={styles.itemPrice}>{'$' + data.price}</p>
            <ItemBar data={data} cartTools={cartTools} />
        </div>
    )
}

export default Card