import React, { Component } from "react";
import { withUser } from "../../context/UserProvider";
import WishlistItem from "./WishlistItem";

class Wishlist extends Component {
  constructor() {
    super();
    this.state = {
      uniqueSkus: []
    }
  }

  componentDidMount() {
    let uniqueSkus = Array.from(new Set(this.props.user.wishList));
      this.setState({
        uniqueSkus: uniqueSkus
      })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.wishList.length !== this.props.user.wishList.length) {
      let uniqueSkus = Array.from(new Set(nextProps.user.wishList));
      this.setState({
        uniqueSkus: uniqueSkus
      })
    }
  }

  render() {
    const wishlistCount = this.props.user.wishList.reduce((final, item) => {
      if (!final[item]) {
        final[item] = 1;
      } else {
        final[item]++;
      }
      return final;
    }, {});


    return (
      <div>
        <h1 className="text-center m-4">Wish List</h1>
        {this.state.uniqueSkus.map((item, i) => (
          <WishlistItem sku={item} quantity={wishlistCount[item]} key={i} />
        ))}
      </div>
    );
  }
}

export default withUser(Wishlist);

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
