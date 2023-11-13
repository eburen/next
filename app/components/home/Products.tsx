import Heading from "../general/heading";
import { products } from "@/utils/Products";
import ProductCard from "./productCard";
const Products = () => {
    return ( 
        <div >
            <Heading text="Products" />
            <div>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
                }
            </div>
        </div>
     );
}
 
export default Products;