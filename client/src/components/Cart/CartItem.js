import React, { Component } from 'react'
import { withProducts } from "../../context/ProductProvider";

class CartItem extends Component {
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
    return (
      <div>
      
      </div>
    )
  }
}

export default withProducts(CartItem)
