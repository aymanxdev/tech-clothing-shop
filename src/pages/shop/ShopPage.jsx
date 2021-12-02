import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverviewContainer from "../../components/collections-overview/CollectionOverview.container";
import { fetchCollectionsStartAsync } from "../../redux/Shop/shopActions";
import CollectionPageContainer from "../../pages/collection-page/CollectionPageContainer";

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
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
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
