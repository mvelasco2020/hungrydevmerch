import './collections-overview.scss'

import { createStructuredSelector } from 'reselect'
import {selectCollectionItems} from '../../redux/shop/shop.selectors'

import { connect } from 'react-redux'
import React from 'react'

import CollectionPreview from '../../components/collection-preview/collection-preview.jsx'


const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionItems
})
export default connect(mapStateToProps)(CollectionsOverview)
