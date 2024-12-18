import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Business from "./pages/Business";
import HelpCenter from "./pages/HelpCenter";
import ContactUs from "./pages/ContactUs";
import Privacy from "./pages/Privacy";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import MentalHealthTips from "./pages/MentalHealthTips";
import SuccessStories from "./pages/SuccessStories";
import Careers from "./pages/Careers";
import Partners from "./pages/Partners";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/business" element={<Business />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/mental-health-tips" element={<MentalHealthTips />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </Router>
  );
}

export default App;