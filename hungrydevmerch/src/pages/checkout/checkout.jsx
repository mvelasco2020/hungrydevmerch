import './checkout.scss'


import React from 'react'
import CheckOutItem from '../../components/checkout-item/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

const CheckoutPage = ({ cartItems, cartTotal }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span className="value">Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => {
                    return <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                })
            }
            <div className='total'>
                <span>TOTAL: ${cartTotal}</span>
            </div>
<div className="test-warning">
    Please user the ff credit card number:
    <br/>
    4242 4242 4242 4242 - Exp 01/22 - CVV:123
</div>
            <StripeCheckoutButton price={cartTotal}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)
