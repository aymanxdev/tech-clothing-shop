import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collections-overview/CollectionOverview";
import {
  convertCollectionsSnapshotsToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/Shop/shopActions";
import CollectionPage from "../collection-page/CollectionPage";

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotsToMap(snapshot);
      updateCollections(collectionsMap);
      console.log(collectionsMap);
    });
  }
  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(Shop);
