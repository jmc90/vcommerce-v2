import React, { Component } from "react";
import ProductCard from "./ProductCard";
import { withProducts } from "../../context/ProductProvider";
import "./storeStyle.css";

class Store extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div className="storeWrapper">

        <h1 className="m-4">Mining Equipment</h1>
        <div className="productCardContainer">
          {this.props.products.map((item, i) => (
            <ProductCard
              title={item.name}
              price={item.regularPrice}
              description={item.shortDescription}
              image={item.image}
              sku={item.sku}
              key={i}
            />
          ))}
        </div>
        
      </div>
    );
  }
}

export default withProducts(Store);