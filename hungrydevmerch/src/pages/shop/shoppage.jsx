import React from "react";
import CollectionPreview from '../../components/collection-preview/collection-preview.jsx'
import {selectCollectionItems} from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux'
const ShopPage = ({ collections }) => {
  console.log(collections.collections)
  return (<div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>);
}

const mapStateToProps = (state) =>({
  collections: selectCollectionItems(state)
})
export default connect(mapStateToProps)(ShopPage);
