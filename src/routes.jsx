import Home from "./components/Home";
import Shop from "./components/Shop";
import App from "./App.jsx"

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'shop', element: <Shop /> }
        ]
    }
]

export default routes