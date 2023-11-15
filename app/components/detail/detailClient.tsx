"use client";

import PageContainer from "../containers/pageContainer";

const detailClient = ({ product }: { product: any }) => {
    return (
        <div className=" my-10">
            <PageContainer>
                {product?.name}

            </PageContainer>
        </div>
    );
}

export default detailClient; 