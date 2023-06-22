import { useState, useEffect } from "react";
import SampleMenElement from "./SampleMenElement";
import SampleWomenElement from "./SampleWomenElement";
import { Link } from "react-router-dom";

const Category = () => {
    const [menwears, setMenwears] = useState([]);
    const [womenwears, setWomenwears] = useState([]);
    const [activeTab, setActiveTab] = useState("men");

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch("/api/underwears");
            const result = await response.json();
            const underwearData = result.underwears;
            const shortListMen = underwearData.slice(6, 10);
            const shortListWomen = underwearData.slice(10, 14);
            setMenwears(shortListMen);
            setWomenwears(shortListWomen);
        };
        fetchAPI();
    }, []);

    return (
        <div className="bg-blue-200 py-8 px-8 md:p-24 flex flex-col items-center justify-center space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold text-black">
                Shop by Category
            </h1>
            <div className="flex flex-row items-center space-x-4 text-black">
                <button
                    onClick={() => setActiveTab("men")}
                    className={`${
                        activeTab === "men"
                            ? "bg-black text-white"
                            : "bg-gray-200 text-black"
                    } px-8 py-3 uppercase font-bold rounded-full shadow hover:bg-black hover:text-white`}
                >
                    Men
                </button>
                <button
                    onClick={() => setActiveTab("women")}
                    className={`${
                        activeTab === "women"
                            ? "bg-black text-white"
                            : "bg-gray-200 text-black"
                    } px-8 py-3 uppercase font-bold rounded-full shadow hover:bg-black hover:text-white`}
                >
                    Women
                </button>
            </div>
            {activeTab === "men" && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8 px-8 md:px-24">
                    {menwears.map((menwear) => (
                        <SampleMenElement key={menwear.id} menwear={menwear} />
                    ))}
                </div>
            )}
            {activeTab === "women" && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8 px-8 md:px-24">
                    {womenwears.map((womenwear) => (
                        <SampleWomenElement
                            key={womenwear.id}
                            womenwear={womenwear}
                        />
                    ))}
                </div>
            )}
            <Link
                to="/collection"
                className="px-12 py-3 bold text-white font-bold bg-[#F7D031]  rounded-md hover:bg-gray-800 transition-colors duration-300"
            >
                SHOP ALL UNDIES
            </Link>
        </div>
    );
};

export default Category;
