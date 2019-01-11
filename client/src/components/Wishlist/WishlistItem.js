import React, { Component } from "react";
import { withProducts } from "../../context/ProductProvider";
import { withUser } from "../../context/UserProvider";
import { Button } from "reactstrap";
import "./wishlistStyles.css";

class WishlistItem extends Component {
  constructor() {
    super();
    this.state = {
      item: {}
    };
  }

  componentDidMount() {
    const product = this.props.products.find(
      product => product.sku.toString() === this.props.sku.toString()
    );
    this.setState({
      item: product
    });
  }

  componentWillReceiveProps(nextProps) {
    const product = this.props.products.find(
      product => product.sku.toString() === nextProps.sku.toString()
    );
    this.setState({
      item: product
    });
  }

  render() {
    return (
      <div className="pageWrapper">
        <div className="productInfoWrapper">
          <div className="productInfo">
            <div
              className="imageThumbnail"
              style={{
                width: "200px",
                height: "200px",
                backgroundImage: `url(${this.state.item.image})`,
                borderRadius: "10px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            />
            <div className="itemTitle">
              {this.state.item.name}
              {this.state.item.sku}
            </div>
            <div className="itemQuantity">
              <span>Quantity: {this.props.quantity}</span>
            </div>
            <div className="itemPrice">
              <span>Price: $ {this.state.item.regularPrice}</span>
            </div>
            <div className="itemSubtotal">
              <span>
                Subtotal: $
                {(this.props.quantity * this.state.item.regularPrice).toFixed(
                  2
                )}{" "}
              </span>
            </div>
            <div className="buttonWrapper">
              <Button
                onClick={() =>
                  this.props.toCartFromWish(this.props.sku, this.props.quantity)
                }
              >
                Add to Cart
              </Button>
              <Button
                onClick={() => this.props.removeFromWishlist(this.props.sku)}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withUser(withProducts(WishlistItem));
