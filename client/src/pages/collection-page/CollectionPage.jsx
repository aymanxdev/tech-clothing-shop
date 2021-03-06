import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/Shop/shopSelectors";
import CollectionItem from "../../components/collection-item/CollectionItem";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./CollectionPage.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
