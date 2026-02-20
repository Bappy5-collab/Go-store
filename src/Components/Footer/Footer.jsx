import { FaMapMarkerAlt, FaFacebookF, FaTwitter, FaPinterestP, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#143d49] text-white py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 text-xs sm:text-sm">
        
        {/* Address */}
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-white" />
          <span className="text-center sm:text-left">Rajshahi, Bangladesh</span>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <span>
            &copy; Copyright 2025. Design by{' '}
            <a href="https://smartaddons.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
              Chandon Kumar
            </a>
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="#" className="hover:text-gray-300 transition-colors"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-300 transition-colors"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-300 transition-colors"><FaPinterestP /></a>
          <a href="#" className="hover:text-gray-300 transition-colors"><FaYoutube /></a>
          <a href="#" className="hover:text-gray-300 transition-colors"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
