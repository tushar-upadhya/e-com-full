import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import First from "./../assets/1.png";
import Second from "./../assets/2.jpg";
import Three from "./../assets/3.png";

const Mention = () => {
    return (
        <div className="container mx-auto flex items-center justify-center p-8">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                className="transition-opacity duration-300 hover:opacity-75"
            >
                <div className="p-2 flex flex-col items-center justify-center space-y-2">
                    <p className="text-md max-w-lg text-center">
                        Brilliant print and Sustainable Underwear brand in our
                        radar
                    </p>
                    <img
                        src={First}
                        alt="First"
                        className="max-w-md max-h-min "
                    />
                </div>
                <div className="p-2 flex flex-col items-center justify-center space-y-2">
                    <p className="text-md max-w-lg text-center">
                        Extremely soft fabric and great prints. So lightweight
                        that it feels like going commando
                    </p>
                    <img
                        src={Second}
                        alt="Second"
                        className="max-w-md max-h-min "
                    />
                </div>
                <div className="p-2 flex flex-col items-center justify-center space-y-2">
                    <p className="text-md max-w-lg text-center">
                        Extremely soft fabric and great prints. So lightweight
                        that it feels like going commando
                    </p>
                    <img
                        src={Three}
                        alt="Third"
                        className="max-w-md max-h-min "
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Mention;
