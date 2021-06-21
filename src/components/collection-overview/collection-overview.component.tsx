import React from "react";

import "./collection-overview.styles.scss";
import { CollectionItem } from "../../redux/shop/shop.interface";
import CollectionPreview from "../collection-preview/collection-preview.component";

interface CollectionsOverViewProps {
  collections: Array<{
    title: string;
    items: CollectionItem[];
  }>;
}

const CollectionsOverview: React.FC<CollectionsOverViewProps> = ({
  collections,
}) => <div className="collections-overview"></div>;
