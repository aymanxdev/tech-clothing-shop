// import {
//   convertCollectionsSnapshotsToMap,
//   firestore,
// } from "../../firebase/firebase.utils";
import shopActionTypes from "./shop.types";

export const fetchCollectionStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

// export const fetchCollectionsStartAsync = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(fetchCollectionStart());

//     collectionRef
//       .get()
//       .then((snapshot) => {
//         const collectionsMap = convertCollectionsSnapshotsToMap(snapshot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch((error) => {
//         dispatch(fetchCollectionsFailure(error.message));
//       });
//   };
// };
