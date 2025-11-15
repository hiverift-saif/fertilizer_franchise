import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white text-base sm:text-lg">Fertilizer Franchise</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              India's trusted fertilizer dealership network. Farmer's prosperity, nation's progress.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-green-400 transition-colors">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-green-400 transition-colors">Services</Link></li>
              <li><Link to="/dealership" className="hover:text-green-400 transition-colors">Dealership</Link></li>
              <li><Link to="/collaboration" className="hover:text-green-400 transition-colors">Collaboration</Link></li>
              <li><Link to="/reviews" className="hover:text-green-400 transition-colors">Reviews</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white text-base sm:text-lg">Legal</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link to="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-green-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white text-base sm:text-lg">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              {/* <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" />
                <a href="tel:01169320272" className="hover:text-green-400 transition-colors">011-69320272</a>
              </li> */}
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:support@fertilizerfranchise.co.in" className="hover:text-green-400 transition-colors break-all">support@fertilizerfranchise.co.in</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" />
                <span>A-10, Sector 22, Noida, UP - 201301</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>© {new Date().getFullYear()} Fertilizer Franchise. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}