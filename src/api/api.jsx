//This file contains the api link of products
import axios from "axios";

export async function productsData(){
    const products = await axios.get(
          
         "https://meesho-backend-eight.vercel.app/product/details"
    );
        
    return products
}
