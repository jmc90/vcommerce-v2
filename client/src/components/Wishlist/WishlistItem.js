import React, { Component } from 'react';
import { withProducts } from "../../context/ProductProvider";
import './wishlistStyles.css';
import {Button} from 'reactstrap'

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
    console.log(this.state.item)
    return (
      <div>
        <div className='productInfo'>
          <div style={{width: '200px', height: '200px', backgroundImage: `url(${this.state.item.image})`,backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat' }}>
          </div>
          <div className='itemTitle'>
            {this.state.item.name} 
          </div>
          <div classNamne='itemQuantity'>
            <span>Quantity: {this.props.quantity}</span>
          </div>
          <div className='itemPrice'>
            <span>Price: $ {this.state.item.regularPrice}</span> 
          </div>
          <div classNamne='itemSubtotal'>
            <span>Subtotal: ${(this.props.quantity * this.state.item.regularPrice).toFixed(2)} </span>
          </div>
          <div className='buttonWrapper'>
            <Button>Add to Cart</Button>
            <Button>Remove</Button>
          </div>
          
        </div>
        
      </div>
    )
  }
}

export default withProducts(WishlistItem)
