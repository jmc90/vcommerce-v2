import React, {Component} from 'react'
import { withUser } from '../../context/UserProvider'
import CartItem from './CartItem'



class Cart extends Component {
  constructor() {
    super()
    this.state = {
      uniqueSkus: []
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
  render() {
    const cartCount = this.props.user.cart.reduce((final, item) => {
         if(!final[item]){
         final[item] = 1
         } else {
         final[item]++
         }
         return final
     }, {})
 
     return (
       <div>
         <h1 className="text-center m-4">Shopping Cart</h1>
         {this.state.uniqueSkus.map((item, i) => <CartItem sku={item} quantity={cartCount[item]} key={i} />)}
       </div>
     )
   }
 }
 
 export default withUser(Cart)