import useItemURL from './useItemUrl';
import Card from './Card'
import NavBar from './NavBar';
import { useOutletContext } from 'react-router-dom';

function Shop() {
    const cartTools = useOutletContext()
    const { itemURL, error, loading } = useItemURL()

    return (
        <div className="shop">
            <NavBar />
            <p className="loading">{loading ? 'Loading...' : null}</p>
            <p className="error">{error ? 'A network error has occurred' : null}</p>
            <div className="cardGrid">
                {itemURL ? itemURL.map(data =>
                    <Card data={data} cartTools={cartTools} key={data.id} />
                ) : null}

            </div>

        </div>
    )
}

export default Shop