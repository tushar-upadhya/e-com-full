import { MdCurrencyExchange } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

const Services = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 px-2 bg-[#F7D031] py-6 border-b-2 border-black">
            <div className="flex flex-row items-start justify-center space-x-2 p-1">
                <MdCurrencyExchange size={45} />
                <h2 className="text-xs mt-1 font-bold max-w-[80px] text-center">
                    14 Day Easy Exchanges
                </h2>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
                <FaShippingFast size={45} />
                <h2 className="text-xs mt-1 font-bold max-w-[100px] text-center">
                    Free Shipping & COD
                </h2>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
                <AiOutlineMessage size={45} />
                <h2 className="text-xs mt-1 font-bold max-w-[80px] text-center">
                    Prompt Support
                </h2>
            </div>
        </div>
    );
};

export default Services;
