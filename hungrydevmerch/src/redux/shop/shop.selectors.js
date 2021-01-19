import { createSelector } from 'reselect'

const selectCollections = state => state.shop;

export const selectCollectionItems =
    createSelector([selectCollections],
        shop => shop.collections)

export const selectCollectionCategory = collectionUrlParam => (
    createSelector([selectCollectionItems],
        collections => collections[collectionUrlParam]

    )
)