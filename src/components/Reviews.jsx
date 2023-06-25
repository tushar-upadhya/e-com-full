import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiFillStar } from "react-icons/ai";
import Img1 from "./../assets/r1.png";
import Img2 from "./../assets/r2.png";
import Img3 from "./../assets/r3.png";

const Reviews = () => {
    return (
        <div className="container mx-auto flex items-center justify-center p-8 text-black">
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div className="p-2 flex flex-col items-center justify-center space-y-2">
                    <img
                        src={Img2}
                        alt="Review 1"
                        className="max-w-md max-h-min"
                    />
                    <div className="flex flex-row items-center justify-center space-x-2">
                        <AiFillStar size={25} />
                        <AiFillStar size={25} />
                        <AiFillStar size={25} />
                        <AiFillStar size={25} />
                        <AiFillStar size={25} />
                    </div>
                    <p className="text-lg md:max-w-md text-center">
                        I am a big fan of customer experience. The whole buying
                        process was seamless and the packaging was elite.
                    </p>
                    <h1 className="font-bold">
                        Aakash S -{" "}
                        <span className="font-bold uppercase">
                            Verified Buyer
                        </span>
                    </h1>
                </div>
                <div className="p-2 flex flex-col items-center justify-center space-y-2">
                    <img
                        src={Img3}
                        alt="Review 2"
                        className="max-w-md max-h-min"
                    />
                    <div className="flex flex-row items-center justify-center space-x-2">
                        <AiFillStar size={25} />
                        <AiFillStar size={25} />
                        <AiFillStar size={25} />
                        <AiFillStar size={25} />
                        <AiFillStar size={25} />
                    </div>
                    <p className="text-lg max-w-md text-center">
                        The itching I used to have while wearing normal undies
                        has gone away. Really soft fiber and quite comfortable.
                        Fits with your body shape.
                    </p>
                    <h1 className="font-bold">
                        Mohammed Taha -{" "}
                        <span className="font-bold uppercase">
                            Verified Buyer
                        </span>
                    </h1>
                </div>
                <div className="p-2 flex flex-col items-center justify-center space-y-2">
                    <img
                        src={Img1}
                        alt="Review 3"
                        className="max-w-md max-h-min"
                    />
                    <div className="flex flex-row items-center justify-center space-x-2">
                        <AiFillStar size={25} />
                        <AiFillStar size={25} />
                        <AiFillStar size={25} />
                        <AiFillStar size={25} />
                        <AiFillStar size={25} />
                    </div>
                    <p className="text-lg max-w-md text-center">
                        LOVE LOVE LOVE. I love the 2 colors that I bought.
                        Please add more nice and amazing prints.
                    </p>
                    <h1 className="font-bold">
                        Rujula J -{" "}
                        <span className="font-bold uppercase">
                            Verified Buyer
                        </span>
                    </h1>
                </div>
            </Carousel>
        </div>
    );
};

export default Reviews;
