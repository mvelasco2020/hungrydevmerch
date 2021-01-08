import './cart-icon.scss'

import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import {ReactComponent as ShoppingIcon} from '../../assets//cartSVG.svg'

import React from 'react'

const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(null, mapDispatchToProps)(CartIcon);

