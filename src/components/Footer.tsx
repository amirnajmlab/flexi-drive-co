import { Link } from "react-router-dom";
import { Car, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">DriveNow</span>
            </Link>
            <p className="text-background/80 text-sm leading-relaxed">
              Your trusted partner for reliable, affordable car rentals. 
              Experience the freedom of the road with our modern fleet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/fleet" className="text-background/80 hover:text-accent transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-background/80 hover:text-accent transition-colors">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Economy Car Rental</li>
              <li>Luxury Vehicle Rental</li>
              <li>Long-term Rentals</li>
              <li>Corporate Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span>info@drivenow.com</span>
              </div>
              <div className="flex items-center space-x-2 text-background/80">
                <MapPin className="h-4 w-4" />
                <span>123 Main St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2024 DriveNow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;