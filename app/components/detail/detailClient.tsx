"use client";

import PageContainer from "../containers/pageContainer";
import Image from "next/image";
import Counter from "../general/counter";
import { useState } from "react";
export type cardProductProps = {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    inStock: boolean;
    image: string;
};

const detailClient = ({ product }: { product: any }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cardProduct, setCardProduct] = useState<cardProductProps>({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: 1,
        inStock: product.inStock,
        image: product.image,
    });

    const increaseFunc = () => { };
    const decreaseFunc = () => { };
    return (
        <div className=" my-10">
            <PageContainer>
                <div className=" block md:flex gap-10 justify-center ">
                    <div className=" relative h-[400px] w-[400px] flex">
                        <Image src={product?.image} alt="" fill />
                    </div>
                    <div className=" w-1/2 ">
                        <div className=" text-xl md:text-2xl">{product.name}</div>
                        <div className=" text-slate-500">{product.description}</div>
                        <div className=" flex item-center gap-2">
                            <div>在庫状況：</div>
                            {product.inStock ? (
                                <div className=" text-green-500">在庫有り</div>
                            ) : (
                                <div className=" text-red-500">在庫切れ</div>
                            )}
                        </div>
                        <Counter increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} cardProduct={cardProduct} />
                    </div>
                </div>
            </PageContainer>
        </div>
    );
};

export default detailClient;
