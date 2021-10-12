import React from "react";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/Shop/shopSelectors";
import "./collectionPage.styles.scss";
import CollectionItem from "../../components/collection-item/CollectionItem";
const CollectionPage = ({ collection }) => {
  console.log(collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
      <p>{collection.title}</p>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
