import React from "react";

const ProductDetail = (props) => {

  const product = props.handleSelctedProduct;
  console.log(product)
  return (
    <div>
      <figure className="image is-64x64">
        <img src={product.image} alt={product.name} />
      </figure>
      <div>{product.price}</div>
      <div>{product.description}</div>
      <div>{product.detail}</div>


    </div>
  )

}

export default ProductDetail;
