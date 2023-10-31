import React from 'react'
import Product from '../Product/Product';
import { addToCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products
  }
}

const mapDispatchToProps = {
  addToCart: addToCart
}

// Way-1
// const connectToStore = connect(
//   mapStateToProps,
//   mapDispatchToProps
// );
// connectToStore(Shop)

// Way-2
// connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Shop)

// way-3
export default connect(mapStateToProps, mapDispatchToProps)(Shop);

// export default Shop