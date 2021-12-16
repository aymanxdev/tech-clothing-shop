import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./Shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
