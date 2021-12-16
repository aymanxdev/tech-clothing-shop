import { takeLatest, call, put } from "redux-saga/effects";
import shopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotsToMap,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shopActions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapchat = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotsToMap,
      snapchat
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
