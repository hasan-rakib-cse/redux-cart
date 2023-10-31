import React from 'react'
import Product from '../Product/Product';

const Shop = () => {

    const products = [
        {id: 1, name: 'Lenovo Laptop'},
        {id: 2, name: 'Asus Laptop'},
        {id: 3, name: 'Dell Laptop'},
        {id: 4, name: 'Hp Laptop'},
        {id: 5, name: 'Toshiba Laptop'},
    ];

  return (
    <div>
        <h4>This is Shop</h4>
        {
          products.map((pd) => <Product product={pd} />)
        }
    </div>
  )
}

export default Shop