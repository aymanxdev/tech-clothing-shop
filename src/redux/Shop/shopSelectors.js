import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.shopData
);

export const selectCollections = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopData],
    (collections) => collections[collectionUrlParam]
  )
);
