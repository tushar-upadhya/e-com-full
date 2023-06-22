import { Link } from "react-router-dom";

const CollectionPageElement = ({ product }) => {
    return (
        <Link to={`${product.id}`}>
            <div className="w-70 flex flex-col justify-center space-y-1 cursor-pointer">
                <div className="relative">
                    <img
                        src={product.imageUrl}
                        className="w-70 transition-transform duration-300 transform hover:scale-105"
                        alt={product.name}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
                </div>

                <h1 className="px-1 text-black">{product.name}</h1>

                <div className="flex flex-row items-center justify-between px-1">
                    <p className="text-xl italic">₹ {product.price}</p>
                </div>
            </div>
        </Link>
    );
};

export default CollectionPageElement;
