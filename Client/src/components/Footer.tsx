import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/help-center" className="text-base text-gray-500 hover:text-gray-900">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/blog" className="text-base text-gray-500 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="/mental-health-tips" className="text-base text-gray-500 hover:text-gray-900">
                  Mental Health Tips
                </a>
              </li>
              <li>
                <a href="/success-stories" className="text-base text-gray-500 hover:text-gray-900">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/about" className="text-base text-gray-500 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-base text-gray-500 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="/partners" className="text-base text-gray-500 hover:text-gray-900">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Platform
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/resources" className="text-base text-gray-500 hover:text-gray-900">
                  Resources
                </a>
              </li>
              <li>
                <a href="/business" className="text-base text-gray-500 hover:text-gray-900">
                  For Business
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-base text-gray-500 hover:text-gray-900">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex justify-center items-center">
          <p className="text-base text-gray-400 flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for better mental health
          </p>
        </div>
      </div>
    </footer>
  );
};