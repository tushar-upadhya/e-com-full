import { Link } from "react-router-dom";

import D1 from "./../assets/d1.avif";
import D2 from "./../assets/d2.webp";
import D3 from "./../assets/d3.avif";

const Deal = () => {
    return (
        <div className="bg-[#F7D031] p-8 md:p-24 flex flex-col md:flex-row items-start justify-between">
            <div className="flex flex-col items-center justify-center space-y-4 md:w-1/2">
                <h1 className="text-black text-2xl font-bold">
                    Matching Undies
                </h1>

                <p className="text-xs text-center max-w-sm">
                    Get a pair of matching undies and experience comfort
                    together!
                </p>

                <img src={D1} className="w-72 h-72" alt="Matching Undies" />

                <Link
                    to="collection"
                    className="px-8 py-2 text-white font-bold bg-gray-600 rounded-md hover:bg-gray-800 transition-colors duration-300"
                >
                    SHOP MATCHING UNDIES
                </Link>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4 md:w-1/2">
                <h1 className="text-black text-2xl font-bold">
                    Deal of the Week
                </h1>

                <p className="text-sm text-center">
                    Every week select styles up to 50% off!
                </p>

                <img src={D2} className="w-72 h-72" alt="Deal of the Week" />

                <Link
                    to="collection"
                    className="px-8 py-2 text-white font-bold bg-gray-600 rounded-md hover:bg-gray-800 transition-colors duration-300"
                >
                    SHOP ALL DEALS
                </Link>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4 md:w-1/2">
                <h1 className="text-black text-2xl font-bold">
                    Build Your Own Pack
                </h1>

                <p className="text-sm text-center">
                    Mix &amp; Match, Any Style, Any Print &amp; Save Up to 25%
                </p>

                <img src={D3} className="w-72 h-72" alt="Build Your Own Pack" />

                <Link
                    to="collection"
                    className="px-8 py-2 text-white font-bold bg-gray-600 rounded-md hover:bg-gray-800 transition-colors duration-300"
                >
                    SHOP NOW
                </Link>
            </div>
        </div>
    );
};

export default Deal;
