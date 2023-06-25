import { Link } from "react-router-dom";

const Announcement = () => {
    return (
        <div className="bg-yellow-300 py-2 md:py-4 flex flex-col md:flex-row items-center justify-center border-b-2 border-black">
            <p className="text-sm md:text-base flex flex-row font-bold tracking-wide">
                JUST LAUNCHED:{" "}
                <Link
                    to="collection"
                    className="underline mx-2  hover:opacity-90"
                >
                    SHORTS & TEES.
                </Link>
            </p>
            <p className="text-xs md:text-sm text-center md:text-left opacity-50 md:opacity-100 transition-opacity duration-300">
                USE NEW400 TO GET ₹400 OFF YOUR ORDER OVER ₹1999/-
            </p>
        </div>
    );
};

export default Announcement;
