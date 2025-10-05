import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Membership", path: "/membership" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-dark-bg border-b border-border/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-primary text-3xl">♞</div>
            <span className="text-dark-foreground font-serif text-xl font-bold">
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
                    : "text-dark-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              <Button variant="outline" className="border-dark-foreground text-dark-foreground hover:bg-dark-foreground hover:text-dark-bg font-medium">
                Sign In
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 text-sm transition-colors ${
                  isActive(item.path)
                    ? "text-primary font-medium"
                    : "text-dark-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="space-y-2">
              <Button variant="outline" className="w-full border-dark-foreground text-dark-foreground hover:bg-dark-foreground hover:text-dark-bg font-medium">
                Sign In
              </Button>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
