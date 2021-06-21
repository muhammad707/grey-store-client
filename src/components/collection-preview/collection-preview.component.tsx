import React from "react";
import { CollectionItem as ICollectionItem } from "../../redux/shop/shop.interface";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.component.scss";

interface CollectionPreviewProps {
  title: string;
  items: ICollectionItem[];
}

const CollectionPreview = ({ title, items }: CollectionPreviewProps) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item._id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
