import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-yellow-300 text-center text-gray-500 py-4 ">
            <p className="text-sm sm:text-base">
                &copy; {new Date().getFullYear()} TUSHAR UPADHYAY
            </p>
            <div className="flex justify-center space-x-4 mt-4">
                <a
                    href="https://github.com/your-github-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub
                        size={20}
                        className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/your-linkedin-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin
                        size={20}
                        className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
