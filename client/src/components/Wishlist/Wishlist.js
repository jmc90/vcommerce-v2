import React, { Component } from "react";
import { withUser } from "../../context/UserProvider";
import WishlistItem from "./WishlistItem";

class Wishlist extends Component {
  constructor() {
    super();
    this.state = {
      uniqueSkus: []
    };
  }

  componentDidMount() {
    let uniqueSkus = Array.from(new Set(this.props.user.wishList));
    this.setState({
      uniqueSkus: uniqueSkus
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.wishList.length !== this.props.user.wishList.length) {
      let uniqueSkus = Array.from(new Set(nextProps.user.wishList));
      this.setState({
        uniqueSkus: uniqueSkus
      });
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
