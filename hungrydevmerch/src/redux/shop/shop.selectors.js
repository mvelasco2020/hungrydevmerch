import { createSelector } from 'reselect'

const selectCollections = state => state.shop;

export const selectCollectionItems =
    createSelector([selectCollections],
        shop => shop.collections)

        //this still convert shop data's object structure and return
        //an array
export const selectCollectionsForPreview =
    createSelector([selectCollectionItems],
        collections => 
        Object.keys(collections)
        .map(key => collections[key])
    )

export const selectCollectionCategory = collectionUrlParam => (
    createSelector([selectCollectionItems],
        collections => collections[collectionUrlParam]

    )
)