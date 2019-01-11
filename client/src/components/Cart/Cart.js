import React from 'react'
import { withUser } from '../../context/UserProvider'
import CartItem from './CartItem'



const Cart = (props) => {

   const cartCount = props.user.cart.reduce((final, item) => {
        if(!final[item]){
        final[item] = 1
        } else {
        final[item]++
        }
        return final
    }, {})

    let uniqueSkus = Array.from(new Set(props.user.cart))

  return (
    <div>
      <h1 className="text-center m-4">Shopping Cart</h1>
      {uniqueSkus.map((item, i) => <CartItem sku={item} quantity={cartCount[item]} key={i} />)}
    </div>
  )
}

export default withUser(Cart)