import { createSelector } from 'reselect'

const selectCollections = state => state.shop;

export const selectCollectionItems =
    createSelector([selectCollections],
        shop => shop.collections)