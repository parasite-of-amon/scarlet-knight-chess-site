import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Resources", path: "/resources" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Contact", path: "/contact" },
  ];

  const joinClubItem = { name: "Join Us", path: "/membership" };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-primary text-3xl">♞</div>
            <span className="text-gray-900 font-serif text-xl font-bold">
              RUTGERS CHESS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
                  isActive(item.path)
                    ? "text-primary font-medium"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to={joinClubItem.path}
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold border-2 border-[#FFD700] hover:bg-primary/90 hover:shadow-lg transition-all duration-300"
            >
              {joinClubItem.name}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 text-sm transition-colors ${
                  isActive(item.path)
                    ? "text-primary font-medium"
                    : "text-gray-700 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to={joinClubItem.path}
              className="block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold border-2 border-[#FFD700] hover:bg-primary/90 transition-all duration-300 text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              {joinClubItem.name}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
