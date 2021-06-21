import React from "react";

import "./collection-item.styles.scss";
import { CollectionItem } from "../../redux/shop/shop.interface";
import CustomButton from "../custom-button/custom-button.component";

interface CollectionItemProps {
  item: CollectionItem;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted>Add to Cart</CustomButton>
    </div>
  );
};

export default CollectionItem;
