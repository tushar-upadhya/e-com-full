import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className=" bg-[#F7D031] text-center sm:text-xl lg:py-4">
            <div className="container mx-auto">
                <div className="text-sm flex flex-col gap-y-6 lg:flex-row items-center justify-between">
                    {/* copyright */}

                    <div>
                        &copy;{new Date().getFullYear()} All Rights Reserved ||
                        Designed and Coded by{" "}
                        <a
                            className="text-gray-800 font-bold hover:text-gray-800 transition-colors duration-300 "
                            href="https://tusharupadhyay.vercel.app/"
                        >
                            Tushar Upadhyay
                        </a>{" "}
                    </div>

                    {/* socials */}
                    <div className="flex gap-x-2 ">
                        <div>
                            <a
                                href="https://github.com/tushar-upadhya"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-gray-800 transition-colors duration-300 w-6 h-6 rounded-full flex justify-center items-center text-2xl"
                            >
                                <AiFillGithub />
                            </a>
                        </div>

                        <div>
                            <a
                                href="https://www.linkedin.com/in/tushar-upadhyay-54029b135/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-gray-800 transition-colors duration-300 w-6 h-6 rounded-full flex justify-center items-center text-2xl"
                            >
                                <AiFillLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
