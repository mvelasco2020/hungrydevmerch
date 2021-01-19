import StripeCheckout from 'react-stripe-checkout'

import React from 'react'

const StripeCheckoutButton = ({ price }) => {
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_51IBBXqBh34fMVeTWYy92cIJIrGHEP255FNiHCO0ncYxaI3yukVZqcfZfUhb7NuW5AzQMIBKH0o8LllOjEwvlwTVt00U31G5zcd'
    
    const onToken = (token) => alert('Test Payment Success')
    return (
        <StripeCheckout 
        name='Hungry Dev Merch Ltd.'
        label='Pay Now'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceInCents}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />

    )
}

export default StripeCheckoutButton
