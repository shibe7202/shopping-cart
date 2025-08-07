import ItemBar from "./ItemBar"

function Card({ data, cartTools }) {

    return (
        <div className="card">
            <h2 className="itemTitle">{data.title}</h2>
            <img src={data.image} alt={data.title} className="itemIMG" />
            <p className="itemDescription">{data.description + data.price}</p>
            <ItemBar data={data} cartTools={cartTools} />
        </div>
    )
}

export default Card