import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


// todo: set publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);

const Payment = () => {
    return (
        <div>
            <div className="mx-4 xl:mx-36 my-10 space-y-10 h-screen">
                <Helmet>
                    <title>MHS | Payment</title>
                </Helmet>
                <SectionTitle
                    heading={'Wanna pay?'}
                    subHeading={'PAYMENT'}
                ></SectionTitle>
                <div className="max-w-[400px] mx-auto">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;