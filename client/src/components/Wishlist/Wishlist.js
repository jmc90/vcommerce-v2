import React from 'react'
import { withUser } from '../../context/UserProvider'
import WishlistItem from './WishlistItem'


const Wishlist = (props) => {

   const inventoryCount = props.user.wishList.reduce((final, item) => {
        if(!final[item]){
        final[item] = 1
        } else {
        final[item]++
        }
        return final
    }, {})

    let uniqueSkus = Array.from(new Set(props.user.wishList))

  return (
    <div>
      {uniqueSkus.map(item => <WishlistItem sku={item} quantity={inventoryCount[item]} />)}
    </div>
  )
}

export default withUser(Wishlist)



// import React, { Component} from 'react';
// import { withProducts } from '../../context/ProductProvider';

//   class Wishlist extends Component{
//     constructor(){
//         super()
//         this.state = {

//         }
//     }

//     handleRemoveItem = (e) => {
//         let removedItem = e.target.id
//         this.props.handleRemoveItemFromWishlist(removedItem)
//     }

//     render(){

//         let row = this.props.currentWishlist.map(item => {
//             let title = item.title
//             let price = item.price
//             let quantity = item.quantity
//             let sku = item.sku
            
//             return (
//                 <tr key={sku}>
//                     <td> { title } </td>
//                     <td> ${ price } </td> 
//                     <td> { quantity } </td>
//                     <td> ${ quantity * price } </td>
//                     <td>
//                         <button onClick={this.handleRemoveItem} id={sku}>Remove Item</button>
//                     </td>
//                     <td>
//                         <button>Add To Cart</button>
//                     </td>
                    
//                 </tr>
//             )
//         })

//         return (
//             <div>
//                 <table >
//                     <tbody>
//                         <tr>
//                             <th>Item</th>
//                             <th>Price</th> 
//                             <th>Quantity</th>
//                             <th>Total</th>
//                         </tr>
//                         {row}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// };

// export default withProducts(Wishlist);