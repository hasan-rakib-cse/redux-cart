import React from 'react'
import Product from '../Product/Product';
import { addToCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Shop = (props) => {

  console.log(props)

    const {products} = props;
    // cartReducers theke products gulo props er moddhe chole asche redux er store theke 

  return (
    <div>
        <h4>This is Shop</h4>
        {
          products.map((pd) => <Product key={pd.id} product={pd} />)
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