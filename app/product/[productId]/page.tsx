import DetailClient from "@/app/components/detail/detailClient";
import { products } from "@/utils/Products";
import React from "react";

type DetailProps = {
    productId?: string | string[];
};
const Detail = ({ params }: { params: DetailProps }) => {
    const { productId } = params;
    const product = products.find((product) => product.id === Number(productId));
    console.log(product);
    return (
        <div>
            <DetailClient product={product} />
        </div>
    );
};

export default Detail;
