import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverviewContainer from "../../components/collections-overview/CollectionOverview.container";
import { fetchCollectionStart } from "../../redux/Shop/shopActions";
import CollectionPageContainer from "../../pages/collection-page/CollectionPageContainer";

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }
  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
