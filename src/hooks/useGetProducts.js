import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
    
    const [products, setProducts] = useState([]);

    useEffect(async () => {

        const resoponse = await axios(API);
        setProducts(resoponse.data);
    }, []);

    return products;
}

export default useGetProducts;