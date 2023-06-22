import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FiFeather, FiArrowUp, FiArrowDown } from "react-icons/fi";
import { TbArrowAutofitWidth } from "react-icons/tb";
import { GiSplitCross } from "react-icons/gi";
import CartContext from "../context/cart-context";

const Product = () => {
    const cartCtx = useContext(CartContext);
    const params = useParams();
    const [productData, setProductData] = useState({});
    const [visible, setVisible] = useState(false);
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [visible]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/underwears/${params.id}`);
            const result = await response.json();
            setProductData(result.underwears);
        };
        fetchData();
    }, [params.id]);

    const [accordion, setAccordion] = useState([
        {
            id: "1",
            qs: "What are Bummer Garments made of?",
            ans: "All our Undies, Pyjamas & Bralettes are made of sustainably sourced Micro Modal fabric. Our Tees & Shorts are further upgraded & made with a combination of Modal & Terry giving it a much more plush & cozy feeling.",
            open: false,
        },
        {
            id: "2",
            qs: "What is your Return/Exchange Policy?",
            ans: "Typically, all our garments qualify for an exchange within a 14 day delivery window.",
            open: true,
        },
        {
            id: "3",
            qs: "How long does Shipping usually take?",
            ans: "Orders are typically processed within 48 working hours before shipping.",
            open: false,
        },
    ]);

    const toggleChangeHandler = (id) => {
        const newAccordion = accordion.map((accord) => {
            if (accord.id === id) {
                return {
                    ...accord,
                    open: !accord.open,
                };
            } else {
                return {
                    ...accord,
                    open: false,
                };
            }
        });
        setAccordion(newAccordion);
    };

    const addToCartHandler = (e) => {
        e.preventDefault();

        if (amount > 0 && amount < 5) {
            cartCtx.addItem({
                id: productData.id,
                amount: amount,
                price: productData.price,
                name: productData.name,
            });
            setVisible(true);
        }
    };

    const decrementAmount = () => {
        setAmount((prevAmount) => Math.max(prevAmount - 1, 1));
    };

    const incrementAmount = () => {
        setAmount((prevAmount) => Math.min(prevAmount + 1, 4));
    };

    return (
        <div className="container mx-auto my-12">
            <div
                className={`fixed bottom-4 right-4 bg-[#F7D031] uppercase border-2 border-black font-bold text-black px-6 py-2 rounded-md ${
                    visible ? "opacity-100" : "opacity-0"
                } transition-opacity duration-100`}
            >
                Item Added To Cart
            </div>
            <div className="my-4 p-8 flex flex-col items-center justify-center space-y-4">
                <p className="uppercase text-xs">
                    Home <span className="opacity-50">/</span> Collection{" "}
                    <span className="opacity-50">/</span>{" "}
                    <span className="font-bold">{productData.name}</span>
                </p>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between p-4 md:p-8 lg:p-12 md:space-x-8">
                <div className="md:w-1/2">
                    <img
                        src={productData.imageUrl}
                        className="w-full"
                        alt={productData.name}
                    />
                </div>
                <div className="md:w-1/2 flex flex-col items-start justify-center space-y-4 p-4">
                    <h1 className="text-black text-2xl md:text-4xl font-bold">
                        {productData.name}
                    </h1>
                    <p className="text-black text-2xl">
                        ₹{productData.price}
                        <span className="text-sm mx-2">
                            (Incl. of all taxes)
                        </span>
                    </p>
                    <div className="text-black w-full hidden md:block">
                        <h1 className="text-2xl font-bold uppercase text-black my-2">
                            PRODUCT HIGHLIGHTS
                        </h1>
                        <div className="flex flex-row font-semibold items-center justify-between flex-1 p-4 md:p-8">
                            <div className="flex flex-col justify-between items-center space-y-2">
                                <FiFeather size={50} />
                                <p className="text-center">Feels Soft & Cozy</p>
                            </div>
                            <div className="flex flex-col justify-between items-center space-y-2">
                                <TbArrowAutofitWidth size={50} />
                                <p className="text-center max-w-xs">
                                    Body Adaptive Fit
                                </p>
                            </div>
                            <div className="flex flex-col justify-between items-center space-y-2">
                                <GiSplitCross size={50} />
                                <p className="text-center max-w-sm">
                                    Made with MicroModal
                                </p>
                            </div>
                        </div>
                    </div>

                    <form
                        className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 space-x-2"
                        onSubmit={addToCartHandler}
                    >
                        <div className="flex items-center divide-x divide-solid  border border-black">
                            <button
                                type="button"
                                className="px-2 py-2 md:px-4 md:py-2 input text-xl rounded text-center  hover:text-black "
                                onClick={decrementAmount}
                            >
                                -
                            </button>

                            <input
                                type="number"
                                max="5"
                                min="1"
                                value={amount}
                                className="px-2 py-2 md:px-4 md:py-2 input text-xl rounded text-center text-black font-semi-bold "
                                readOnly
                            />

                            <button
                                type="button"
                                className="px-2 py-2 md:px-4 md:py-2 input text-xl rounded text-center   hover:text-black "
                                onClick={incrementAmount}
                            >
                                +
                            </button>
                        </div>

                        <button className="px-2 md:px-4 md:py-2 text-md md:text-xl text-center text-black font-bold border border-black uppercase ml-0.5em bg-[#F7D031]">
                            ADD TO CART
                        </button>
                    </form>
                </div>
            </div>

            <div className="md:flex md:items-center md:justify-center">
                <div className="flex flex-col items-center justify-between space-y-4 text-black max-w-2xl overflow-hidden">
                    <h1 className="text-4xl font-bold">FAQs</h1>

                    <div className="w-full">
                        {accordion.map((accord) => (
                            <div
                                key={accord.id}
                                className={`p-2 transition-colors duration-300 ${
                                    accord.open ? "bg-[#F7D031]" : ""
                                }`}
                                id={accord.id}
                            >
                                <div
                                    onClick={() =>
                                        toggleChangeHandler(accord.id)
                                    }
                                    className="cursor-pointer flex flex-row items-center justify-between text-lg md:text-xl font-bold py-4"
                                >
                                    <div>{accord.qs}</div>
                                    {accord.open ? (
                                        <FiArrowUp />
                                    ) : (
                                        <FiArrowDown />
                                    )}
                                </div>

                                {accord.open && (
                                    <div className="text-base md:text-md transition-opacity duration-300">
                                        {accord.ans}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
