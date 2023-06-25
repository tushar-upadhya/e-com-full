import { Link } from "react-router-dom";

const CollectionPageElement = ({ product }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Link
            onClick={scrollToTop}
            to={`${product.id}`}
            className="hover:bg-gray-200 transition-colors duration-300"
        >
            <div className="w-70 flex flex-col justify-center space-y-1 cursor-pointer">
                <img
                    src={product.imageUrl}
                    className="w-70"
                    alt={product.name}
                />

                <h1 className="px-1 text-black">{product.name}</h1>
                <div className="flex flex-row items-center justify-between px-1">
                    <p className="text-xl italic">₹ {product.price}</p>
                </div>
            </div>
        </Link>
    );
};

export default CollectionPageElement;
