import React from 'react'

function ProductDetails
({params}: {params: {productId: string}}) {
  return (
    <h3>
        Details about the {params.productId}

    </h3>
  )
}

export default ProductDetails
