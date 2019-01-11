import React, { Component } from 'react'
import { withUser } from '../../context/UserProvider'
import { withProducts } from '../../context/ProductProvider'
import CartItem from './CartItem'
import CheckoutModal from './CheckoutModal'



class Cart extends Component {
  constructor() {
    super()
    this.state = {
      uniqueSkus: [],
      showModal: false,
    }
  }

  componentDidMount() {
    let uniqueSkus = Array.from(new Set(this.props.user.cart));
    this.setState({
      uniqueSkus: uniqueSkus
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.cart.length !== this.props.user.cart.length) {
      let uniqueSkus = Array.from(new Set(nextProps.user.cart));
      this.setState({
        uniqueSkus: uniqueSkus
      })
    }
  }

  enableCheckout = () => {
    this.props.toggleModal()
  }

  render() {
    const cartCount = this.props.user.cart.reduce((final, item) => {
      if (!final[item]) {
        final[item] = 1
      } else {
        final[item]++
      }
      return final
    }, {})

    return (
      <div>
        <h1 className="text-center m-4">Shopping Cart</h1>
        <div className="d-flex justify-content-center">
          <CheckoutModal buttonLabel={"Checkout"} />
        </div>
        {this.state.uniqueSkus.map((item, i) => <CartItem sku={item} quantity={cartCount[item]} key={i} />)}
      </div>
    )
  }
}

export default withProducts(withUser(Cart))