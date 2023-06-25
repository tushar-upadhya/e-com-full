import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { useContext, useState } from "react";
import CartContext from "../context/cart-context";

const CartItem = ({ cartItem }) => {
    const CartCtx = useContext(CartContext);
    const [hoveredButton, setHoveredButton] = useState(null);

    const cartItemAddHandler = (cartItem) => {
        CartCtx.addItem({
            ...cartItem,
            amount: 1,
        });
    };

    const cartItemRemoveHandler = (id) => {
        CartCtx.removeItem(id);
    };

    const handleButtonMouseEnter = (button) => {
        setHoveredButton(button);
    };

    const handleButtonMouseLeave = () => {
        setHoveredButton(null);
    };

    return (
        <div className="flex flex-col items-start text-black justify-between space-y-4 shadow w-[300px] md:w-[400px] p-4">
            <h1 className="text-xl font-bold capitalize">{cartItem.name}</h1>
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center space-x-2">
                    <span className="font-bold italic">
                        Rs {cartItem.price}
                    </span>
                    <span>
                        <ImCross size={20} />
                    </span>
                    <span>{cartItem.amount}</span>
                </div>
                <div className="flex flex-row items-center justify-between space-x-4">
                    <AiFillPlusCircle
                        size={40}
                        className={`cursor-pointer ${
                            hoveredButton === "add" ? "text-red-500" : ""
                        }`}
                        onClick={() => cartItemAddHandler(cartItem)}
                        onMouseEnter={() => handleButtonMouseEnter("add")}
                        onMouseLeave={handleButtonMouseLeave}
                    />
                    <AiFillMinusCircle
                        size={40}
                        className={`cursor-pointer ${
                            hoveredButton === "remove" ? "text-red-500" : ""
                        }`}
                        onClick={() => cartItemRemoveHandler(cartItem.id)}
                        onMouseEnter={() => handleButtonMouseEnter("remove")}
                        onMouseLeave={handleButtonMouseLeave}
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
