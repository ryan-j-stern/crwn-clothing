import React, { Component } from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        <h1>Collections</h1>
        {collections.map(({ id, ...otherProps }) => (
          <PreviewCollection key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
