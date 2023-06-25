import { useContext } from "react";
import Logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import Underwear from "./../assets/underwear.webp";
import CartContext from "../context/cart-context";
const Navbar = () => {
    const cartCtx = useContext(CartContext);
    return (
        <div className="flex flex-row items-center justify-between space-x-4 px-2 md:px-6 py-4 border-b-2 border-black">
            <div className=" md:w-1/3 ">
                <Link to="..">
                    <img
                        src={Logo}
                        alt="Bummer Logo"
                        className="w-24 md:w-32  "
                    />
                </Link>
            </div>

            <ul className="md:w-1/3  flex flex-row  md:space-x-8 items-center justify-center uppercase text-sm font-bold px-4">
                <li className="hidden md:block">
                    <Link to="/">HOME</Link>{" "}
                </li>
                <li>
                    <Link to="collection">SHOP</Link>{" "}
                </li>
                <li className="hidden md:block">
                    <a
                        href="https://thesujitmemane.vercel.app/"
                        target="_blank"
                    >
                        About Me
                    </a>
                </li>
            </ul>
            <div className="md:w-1/3   flex flex-row  items-center justify-end space-x-4">
                <Link to="cart">
                    <div className="relative p-1 md:p-2 cursor-pointer ">
                        <span className="absolute bg-[#343a40] text-white rounded-full px-1 -ml-2 -mt-2 text-xs">
                            {cartCtx.items.length}
                        </span>

                        <img src={Underwear} className="md:w-11 h-8" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
