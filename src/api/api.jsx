//This file contains the api link of products
import axios from "axios";

export async function productsData(){
    const products = await axios.get(
        "https://meesho-backend-1qyx.onrender.com/api/product/details"
    );
        
    return products
}
