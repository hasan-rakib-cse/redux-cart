import React from 'react'

const Product = (props) => {
  const productStyle = {
    border: '1px solid tomato',
    borderRadius: '10px',
    margin: '10px 20px',
    padding: '20px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  }

  const {addToCart, product} = props;

  return (
    <div style={productStyle}>
        <h5 style={{margin: 0, width: '70px'}}>{product.name}</h5>
        <button onClick={() => addToCart(product.id, product.name)}>Add to Cart</button>
    </div>
  )
}

export default Product