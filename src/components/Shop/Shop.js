import React from 'react'
import Product from '../Product/Product';
import { addToCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Shop = (props) => {

    const {products, addToCart} = props;
    // cartReducers theke products gulo props er moddhe chole asche redux er store theke 

  return (
    <div>
        <h4>This is Shop</h4>
        {
          products.map((pd) => <Product key={pd.id} product={pd} addToCart = {addToCart} />)
          // addToCart = {addToCart}, akhane addToCart asche mapDispatchToProps er right addToCart theke, sei right addToCart asche
          // import { addToCart } from '../../redux/actions/cartActions'; theke
        }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
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