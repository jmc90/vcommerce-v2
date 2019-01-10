import React, { Component } from 'react'
import { withProducts } from "../../context/ProductProvider";

class WishlistItem extends Component {
  constructor(){
    super()
    this.state = {
      item: {}
    }
  }

  componentDidMount() {
    const product = this.props.products.find(product => product.sku.toString() === this.props.sku.toString())
    this.setState({
      item: product
    })
  }

  render() {
    console.log()
    return (
      <div>
        {this.state.item.name} {this.props.quantity}
      </div>
    )
  }
}

export default withProducts(WishlistItem)
