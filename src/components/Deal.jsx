import { Link } from "react-router-dom";
import D1 from "./../assets/d1.avif";
import D2 from "./../assets/d2.webp";
import D3 from "./../assets/d3.avif";

const Deal = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="bg-[#F7D031] space-y-4 md:space-y-0 z-100 p-8 md:p-24 flex flex-col md:flex-row items-center justify-center md:justify-between">
                <div className="flex flex-col items-center justify-center space-y-4 w-full md:w-1/3">
                    <h1 className="text-black text-2xl font-bold">
                        Matching Undies
                    </h1>
                    <p className="text-xs text-center max-w-sm">
                        Get a pair of matching undies and experience comfort
                        together!
                    </p>
                    <div className="relative w-48 md:w-56 h-48 md:h-56">
                        <img
                            src={D1}
                            className="w-full h-full transition-transform duration-300 transform hover:scale-105"
                            alt="Matching Undies"
                        />
                    </div>
                    <Link
                        to="collection"
                        onClick={scrollToTop}
                        className="bg-white text-center border-black border-2 px-16 py-2 font-bold text-black transition-colors duration-300 hover:bg-black hover:text-white"
                    >
                        SHOP MATCHING UNDIES
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 w-full md:w-1/3">
                    <h1 className="text-black text-2xl font-bold">
                        Deal of the Week
                    </h1>
                    <p className="text-sm text-center">
                        Every week select styles up to 50% off!
                    </p>
                    <div className="relative w-48 md:w-56 h-48 md:h-56">
                        <img
                            src={D2}
                            className="w-full h-full transition-transform duration-300 transform hover:scale-105"
                            alt="Deal of the Week"
                        />
                    </div>
                    <Link
                        to="collection"
                        onClick={scrollToTop}
                        className="bg-white border-black border-2 px-16 py-2 font-bold text-black transition-colors duration-300 hover:bg-black hover:text-white"
                    >
                        SHOP ALL DEALS
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 w-full md:w-1/3">
                    <h1 className="text-black text-2xl font-bold">
                        Build Your Own Pack
                    </h1>
                    <p className="text-sm text-center">
                        Mix & Match, Any Style, Any Print & Save Up to 25%
                    </p>
                    <div className="relative w-48 md:w-56 h-48 md:h-56">
                        <img
                            src={D3}
                            className="w-full h-full transition-transform duration-300 transform hover:scale-105"
                            alt="Build Your Own Pack"
                        />
                    </div>
                    <Link
                        to="collection"
                        onClick={scrollToTop}
                        className="bg-white border-black border-2 px-16 py-2 font-bold text-black transition-colors duration-300 hover:bg-black hover:text-white"
                    >
                        SHOP NOW
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Deal;
