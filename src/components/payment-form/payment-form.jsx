import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCartTotal, selectTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsModalOpen } from "../../store/modal/modal.selector";
import BlackBtn from "../blackbtn/BlackBtn";
import OrderModal from "../order-modal/OrderModal";
import "./payment-form.css";
import { setIsModalOpen } from "../../store/modal/modal.action";
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      display: "block !important",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const { total } = useSelector(selectTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessing, setIsProcessing] = useState(false);
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();
  const toggleIsCartOpen = () => dispatch(setIsModalOpen(!isModalOpen));
  const paymentHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: total * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessing(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        toggleIsCartOpen();
      }
    }
  };

  return (
    <>
      <form onSubmit={paymentHandler}>
        <CardElement options={CARD_ELEMENT_OPTIONS} />

        <BlackBtn
          isLoading={isProcessing}
          text="Checkout"
          className="checkout-btn"
        />
      </form>
      {isModalOpen ? <OrderModal /> : null}
    </>
  );
};

export default PaymentForm;
