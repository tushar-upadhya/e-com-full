import { useContext, useState, useRef } from "react";
import StripeCheckout from "react-stripe-checkout";
import CartContext from "../context/cart-context";

const PaymentForm = ({ onClose }) => {
    const CartCtx = useContext(CartContext);

    const [isFormValid, setIsFormValid] = useState({
        isEnteredNameValid: true,
        isEnteredPostalValid: true,
        isEnteredCityValid: true,
    });

    const isEmpty = (value) => value.trim() !== "";

    const hasMinLength = (value, length) => value.trim().length >= length;

    const enteredNameRef = useRef();
    const enteredPostalRef = useRef();
    const enteredCityRef = useRef();

    const placeOrderHandler = (event) => {
        event.preventDefault();
        const enteredName = enteredNameRef.current.value;
        const enteredCity = enteredCityRef.current.value;
        const enteredPostal = enteredPostalRef.current.value;
        const isNameValid = isEmpty(enteredName);
        const isPostalValid = hasMinLength(enteredPostal, 5);
        const isCityValid = isEmpty(enteredCity);

        setIsFormValid({
            isEnteredNameValid: isNameValid,
            isEnteredPostalValid: isPostalValid,
            isEnteredCityValid: isCityValid,
        });

        const formIsValid = isNameValid && isPostalValid && isCityValid;

        if (!formIsValid) {
            return;
        }
        // props.onOrder({
        //   name: enteredName,
        //   postal: enteredPostal,
        //   city: enteredCity,
        // });
        console.log("Order is Placed");
        console.log(isFormValid);
    };

    const nameControlClasses = `px-4 py-2 border outline-none ${
        isFormValid.isEnteredNameValid ? "" : "border-red-400"
    }`;

    const postalControlClasses = `px-4 py-2 border outline-none ${
        isFormValid.isEnteredPostalValid ? "" : "border-red-400"
    }`;

    const cityControlClasses = `px-4 py-2 border outline-none ${
        isFormValid.isEnteredCityValid ? "" : "border-red-400"
    }`;

    const onToken = async (token) => {
        CartCtx.clearCart();
    };

    return (
        <div className="bg-white p-4 rounded-md shadow">
            <form onSubmit={placeOrderHandler}>
                <div className="mb-4">
                    <input
                        ref={enteredNameRef}
                        type="text"
                        id="name"
                        placeholder="Enter Your Name"
                        className={nameControlClasses}
                    />
                    {!isFormValid.isEnteredNameValid && (
                        <p className="text-red-500 text-sm">
                            Please enter a valid name.
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <input
                        ref={enteredPostalRef}
                        type="text"
                        id="postal"
                        placeholder="Enter Your Postal Code"
                        className={postalControlClasses}
                    />
                    {!isFormValid.isEnteredPostalValid && (
                        <p className="text-red-500 text-sm">
                            Please enter a valid postal code (min. 5
                            characters).
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <input
                        ref={enteredCityRef}
                        type="text"
                        id="city"
                        placeholder="Enter Your City"
                        className={cityControlClasses}
                    />
                    {!isFormValid.isEnteredCityValid && (
                        <p className="text-red-500 text-sm">
                            Please enter a valid city name.
                        </p>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    <StripeCheckout
                        token={onToken}
                        name="Bummer Checkout"
                        className="bg-black text-white px-4 py-2 rounded"
                        currency="INR"
                        disabled={!isFormValid}
                        amount={CartCtx.totalAmount * 100}
                        stripeKey="pk_test_51N9M5SSF2sALXBLTuoV4OMgbrvSrMKwKEBIjn0BksmyfXjdXx03pdL5z3f4SKLwIF8ZMWQeq1wab3e86DobKpr0400njUeoBgc"
                    />
                    <button
                        className="bg-gray-200 text-black px-4 py-2 rounded font-semibold"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;
