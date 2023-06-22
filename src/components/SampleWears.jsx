import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SampleWearElement from "./SampleWearElement";

const SampleWears = () => {
    const [underwears, setUnderwears] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch("/api/underwears");
            const result = await response.json();
            const underwearData = result.underwears;
            const shortList = underwearData.slice(0, 5);
            setUnderwears(shortList);
        };

        fetchAPI();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="container mx-auto my-8 md:my-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Meet our favorites
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {underwears.map((underwear) => (
                    <SampleWearElement
                        key={underwear.id}
                        underwear={underwear}
                    />
                ))}
            </div>

            <Link
                to="collection"
                onClick={scrollToTop}
                className="block w-full md:w-auto mx-auto mt-8 px-8 py-4 text-center text-white font-bold bg-[#F7D031]  rounded-md hover:bg-gray-800 transition-colors duration-300"
            >
                SHOP ALL FAVORITES
            </Link>
        </div>
    );
};

export default SampleWears;
