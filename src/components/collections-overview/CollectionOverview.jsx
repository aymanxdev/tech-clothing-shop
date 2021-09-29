import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopData } from "../../redux/Shop/shopSelectors";
import CollectionPreview from "../collection-preview/CollectionPreview";
import "./collectionOverview.styles.scss";
const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopData,
});
export default connect(mapStateToProps)(CollectionOverview);
