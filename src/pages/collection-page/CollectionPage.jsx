import React from "react";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/Shop/shopSelectors";
import "./collectionPage.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h1>Category Page</h1>
      <p>{collection.title}</p>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
