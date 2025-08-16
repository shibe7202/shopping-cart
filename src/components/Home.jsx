import NavBar from "./NavBar"
import { useOutletContext } from "react-router-dom"

function Home() {
    const cartTools = useOutletContext()

    return (
        <div className="home">
            <NavBar />
            <p>Welcome to the home page!</p>
        </div>
    )
}

export default Home