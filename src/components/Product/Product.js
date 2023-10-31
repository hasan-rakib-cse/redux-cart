import React from 'react'

const Product = (props) => {

  const {addToCart, product} = props;

  return (
    <div style={{border: '1px solid tomato', borderRadius: '10px', margin: '10px 20px', padding: '10px 20px'}}>
        <h5>{product.name}</h5>
        <button onClick={() => addToCart(product.id, product.name)}>Add to Cart</button>
    </div>
  )
}

export default Product