import React from 'react'

const Product = (props) => {

  const {id, name} = props.product;

  return (
    <div style={{border: '1px solid tomato', borderRadius: '10px', margin: '10px 20px', padding: '10px 20px'}}>
        <h5>{name}</h5>
        <button>Add to Cart</button>
    </div>
  )
}

export default Product