import { Link } from "react-router-dom";
import Hero from "../assets/hero.webp";

import Mention from "../components/Mention";
import SampleWears from "../components/SampleWears";
import Reviews from "../components/Reviews";
import Deal from "../components/Deal";
import Category from "../components/Category";
import Info from "../components/Info";

const Home = () => {
    return (
        <div>
            <div
                className="bg-cover bg-no-repeat bg-center bg-gradient-to-b from-black via-black-opacity-46 to-transparent transition-opacity duration-500"
                style={{ backgroundImage: `url(${Hero})` }}
            >
                <div className="px-8 py-16 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                        Introducing 24/7 Inactivewear
                    </h1>

                    <p className="text-xl mt-4">New In: Tees & Shorts</p>

                    <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-3 mt-8">
                        <Link
                            to="collection"
                            className="bg-white text-black border-2 border-black text-md px-6 py-3 font-bold uppercase transition-colors duration-300 hover:bg-black hover:text-white"
                        >
                            Shop Tees and Shorts
                        </Link>

                        <Link
                            to="collection"
                            className="bg-white text-black border-2 border-black text-md px-6 py-3 font-bold uppercase transition-colors duration-300 hover:bg-black hover:text-white"
                        >
                            Shop Undies
                        </Link>
                    </div>
                </div>
            </div>

            <Mention />

            <SampleWears />

            <Reviews />

            <Deal />

            <Category />

            <Info />
        </div>
    );
};

export default Home;
