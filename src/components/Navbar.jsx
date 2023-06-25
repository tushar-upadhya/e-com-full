import { useContext } from "react";
import Logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import Underwear from "../assets/underwear.webp";
import CartContext from "../context/cart-context";

const Navbar = () => {
    const cartCtx = useContext(CartContext);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 px-2 md:px-6 py-4 border-b-2 border-black">
            <div className="w-full md:w-auto">
                <Link to="/">
                    <img
                        src={Logo}
                        alt="Bummer Logo"
                        className="w-24 md:w-32"
                    />
                </Link>
            </div>

            <ul className="w-full md:w-auto flex flex-row space-x-8 items-center justify-center uppercase text-sm font-bold px-4">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/collection">SHOP</Link>
                </li>
                <li>
                    <a
                        href="https://tusharupadhyay.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        About Me
                    </a>
                </li>
            </ul>

            <div className="w-full md:w-auto flex flex-row items-center justify-end space-x-4">
                <Link to="/cart">
                    <div className="relative p-1 md:p-2 cursor-pointer">
                        <span className="absolute bg-[#343a40] text-white rounded-full px-1 -ml-2 -mt-2 text-xs">
                            {cartCtx.items.length}
                        </span>
                        <img src={Underwear} className="w-11 h-8" alt="Cart" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
