import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_Zp0OVQ8y0RF6oQmGBSsLHBMJ";

    const onToken = token => {
        console.log(token)
        alert('Paeiment Successul')
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="MASQUE"
            billingAddressshippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
