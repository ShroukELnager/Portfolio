import { FaGoogle, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-center py-6">
            <p className="text-gray-700 mb-4">©2025 Created by Shrouk Kamel</p>
            <div className="flex justify-center space-x-4 text-2xl text-[#0b0e17]">
                <a href="#" className="hover:opacity-80 transition">
                    <FaGoogle size={18} />
                </a>
                <a href="#" className="hover:opacity-80 transition">
                    <FaLinkedinIn size={18} />
                </a>
                <a href="#" className="hover:opacity-80 transition">
                    <FaGithub size={18} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
