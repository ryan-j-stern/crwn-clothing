import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import { withRouter, Link } from "react-router-dom";

import "./preview-collection.styles.scss";

const PreviewCollection = ({ title, items, match }) => (
  <div className="collection-preview">
    <Link to={`${match.url}/${title.toLowerCase()}`} className="title">
      {title.toUpperCase()}
    </Link>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(PreviewCollection);
