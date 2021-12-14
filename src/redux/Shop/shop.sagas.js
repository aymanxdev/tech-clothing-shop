import { takeEvery } from "redux-saga/effects";
import shopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("Iam fired");
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
