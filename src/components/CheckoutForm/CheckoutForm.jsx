import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: {
                name,
                email,
            },
        });

        if (error) {
            setErrorMessage(error.message);
            setIsLoading(false);
        } else {
            // Send paymentMethod.id to your server
            const response = await fetch('/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
            });
            const paymentResult = await response.json();

            if (paymentResult.error) {
                setErrorMessage(paymentResult.error);
            } else {
                // Handle successful payment here
                console.log('Payment successful!', paymentResult);
            }
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <CardElement />
            <button type="submit" disabled={!stripe || isLoading}>
                {isLoading ? 'Processing...' : 'Pay'}
            </button>
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};

export default CheckoutForm;