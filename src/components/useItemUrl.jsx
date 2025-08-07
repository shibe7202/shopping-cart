import { useState, useEffect } from "react";

const useItemURL = () => {
    const [itemURL, setitemURL] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => setitemURL(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { itemURL, error, loading };
};

export default useItemURL