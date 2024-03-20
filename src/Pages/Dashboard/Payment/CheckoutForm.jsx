import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuthContext from "../../../Hooks/useAuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const axiosSecure = useAxiosSecure();
    const { user } = useAuthContext();
    const [cart, refetch] = useCart();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTransactionId('');

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.error('payment method', error)
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if (confirmError) {
            console.log('confirmError', confirmError);
        }
        else {
            console.log('paymentIntent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id:', paymentIntent.id)
                setTransactionId(`Your transaction id: ${paymentIntent.id}`);

                // now save the payment in the database
                const paymentInfo = {
                    email: user.email,
                    amount: parseFloat(totalPrice.toFixed(2)),
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert use moment.js
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: 'Pending',
                    category: 'Food item'
                }
                const res = await axiosSecure.post('/payments', paymentInfo)
                refetch();
                if(res.data?.paymentResult?.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Payment successful",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/dashboard/payment-history')
                }
            }
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className="text-red-500 mt-3"><small>{error}</small></p>
            {
                transactionId &&
                <p className="text-green-500 mt-3"><small>{transactionId}</small></p>
            }
            <div className="flex justify-center mt-5">
                <button className="btn btn-sm btn-primary w-1/2" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;