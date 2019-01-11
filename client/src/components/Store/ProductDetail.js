import React, { Component } from "react";
import { withProducts } from "../../context/ProductProvider";
import { withUser } from "../../context/UserProvider";
import { Button } from "reactstrap";
import ItemAddedModal from "./ItemAddedModal";
import "./storeStyle.css";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      productImages: [],
      imageArrayHasBeenSet: false,
      imageScrollCounter: 0
    };
    this.productImages = [];
    this.imageStyles = {
      width: "300px",
      height: "300px",
      backgroundImage: undefined,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };
  }

  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.imageStyles = {
      ...this.imageStyles,
      backgroundImage: `url(${nextProps.singleProduct.image})`
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleKeypress(e) {
    const characterCode = e.key;
    if (characterCode === "Backspace") return;
    const characterNumber = Number(characterCode);
    if (characterNumber >= 0 && characterNumber <= 9) {
      if (e.currentTarget.value && e.currentTarget.value.length) {
        return;
      }
    } else {
      e.preventDefault();
    }
  }

  increaseCounter = () => {
    if (
      this.state.imageScrollCounter >= -1 &&
      this.state.imageScrollCounter < this.productImages.length
    ) {
      this.setState(
        prevState => {
          return { imageScrollCounter: prevState.imageScrollCounter + 1 };
        },
        () => this.setImageArray()
      );
    } else {
      this.setImageArray();
    }
  };

  decreaseCounter = () => {
    if (
      this.state.imageScrollCounter >= 0 &&
      this.state.imageScrollCounter <= this.productImages.length
    ) {
      this.setState(
        prevState => {
          return { imageScrollCounter: prevState.imageScrollCounter - 1 };
        },
        () => this.setImageArray()
      );
    } else {
      this.setImageArray();
    }
  };

  setImageArray = () => {
    if (!this.state.imageArrayHasBeenSet) {
      const allImageArray = this.props.singleProduct.images;
      allImageArray.forEach(item => {
        this.productImages.push(item.href);
      });
      console.log(this.productImages);
      this.setState(
        {
          imageArrayHasBeenSet: true
        },
        () => this.handleImageScroll()
      );
    } else {
      this.handleImageScroll();
    }
  };

  handleImageScroll = () => {
    console.log("counter is at :" + this.state.imageScrollCounter);
    this.imageStyles = {
      ...this.imageStyles,
      backgroundImage: `url(${
        this.productImages[this.state.imageScrollCounter]
      })`
    };
  };

  render() {
    const {
      name,
      shortDescription,
      regularPrice,
      longDescription,
      customerReviewAverage,
      customerReviewCount,
      depth,
      height,
      modelNumber,
      sku 
    } = this.props.singleProduct;

    return (
      <div className="productDetailWrapper p-2">
        {this.props.productAddedModalOn === true ? <ItemAddedModal /> : null}
        <h2 className="m-3"> {name}</h2>
        <h4 className="mb-5">{shortDescription}</h4>
        <div className="productGridContainer">
          <div className="productImage" style={this.imageStyles} />
          <div className="productGridRows">
            <h6 className="descriptionHeader">Product Description:</h6>
            <p>{longDescription}</p>
            <p>Model Number: {modelNumber}</p>
            <h6>Price: ${regularPrice}</h6>
            <h6>Average Rating: {customerReviewAverage}</h6>
            <h6>Reviews: {customerReviewCount}</h6>
            <h6>
              Dimensions: {depth} x {height}
            </h6>
          </div>
          <div className="productForm">
            <div className="scrollButtonContainer">
              <button className="scrollButton" onClick={this.decreaseCounter}>
                {" "}
                Prev{" "}
              </button>
              <button className="scrollButton" onClick={this.increaseCounter}>
                {" "}
                Next{" "}
              </button>
            </div>
            <form name="quantityForm">
              Quantity:{" "}
              <input
                name="quantity"
                type="number"
                placeholder="1"
                min="0"
                step="1"
                value={this.state.quantity}
                onChange={this.handleChange}
                onKeyDown={this.handleKeypress}
              />
            </form>
            <div className="buttonContainer">
              <Button
                className="addButton"
                color="secondary"
                onClick={() =>
                  this.props.addToWishList(sku, this.state.quantity)
                }
              >
                Add to Wishlist
              </Button>
              <Button
                className="addButton"
                color="secondary"
                onClick={() => this.props.addToCart(sku, this.state.quantity)}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withUser(withProducts(ProductDetails));
