import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

function ProductDetails({ params }: Props) {
  return <h3>Details about the {params.productId}</h3>;
}

export default ProductDetails;
