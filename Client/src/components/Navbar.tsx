import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogIn, Menu, X, Bot } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToWellBeingAI = () => {
    const element = document.querySelector('.bg-sand-50');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span 
              className="text-xl font-semibold text-sage-400 cursor-pointer"
              onClick={() => navigate("/")}
            >
              WellBeing
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-sage-400"
              onClick={() => navigate("/about")}
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-sage-400"
              onClick={() => navigate("/pricing")}
            >
              Pricing
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-sage-400"
              onClick={() => navigate("/business")}
            >
              For Business
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-sage-400"
              onClick={scrollToWellBeingAI}
            >
              <Bot className="mr-2 h-4 w-4" />
              WellBeingAI
            </Button>
            <Button
              variant="outline"
              className="ml-4"
              onClick={() => navigate("/login")}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Button
              variant="ghost"
              className="w-full text-left"
              onClick={() => navigate("/about")}
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left"
              onClick={() => navigate("/pricing")}
            >
              Pricing
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left"
              onClick={() => navigate("/business")}
            >
              For Business
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left"
              onClick={scrollToWellBeingAI}
            >
              <Bot className="mr-2 h-4 w-4" />
              WellBeingAI
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate("/login")}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};