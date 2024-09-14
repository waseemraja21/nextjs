import React from "react";
import Link from "next/link";

function ProductList() {
  return (
    <>
      <Link href="/home">Home</Link>
      <h1>Product List</h1>
      <h2>Product1</h2>
      <h2>Product2</h2>
      <h2>Product3</h2>
    </>
  );
}

export default ProductList;
