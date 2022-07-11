import { useState, useEffect } from "react";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

const Home = () => {
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProduct = () => (
        getProducts().then(data =>{
            if ( data.error){
                setError(data.error);
            }else{
                setProducts(data);
            }
        })
    )

    useEffect(() => {
        loadAllProduct()
    }, []);

    return ( 
        <Base title="Home Page"  decription="Happy Shopping">
            <div className="row text-center jc">
                <h1 className="text-white ">All Products</h1>
                <div className="row jc">
                    {products.map((product, index) => {
                        return(
                            <div key={index} className="co ">
                                <Card product={product}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Base>
     );
}
 
export default Home;