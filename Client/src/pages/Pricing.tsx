import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-sand-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center text-sage-600 mb-12">
          Choose Your Plan
        </h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-sage-500">Student Plan</h2>
            <div className="text-3xl font-bold">$100<span className="text-lg font-normal text-gray-600">/session</span></div>
            <ul className="space-y-2 text-gray-600">
              <li>• Perfect for students</li>
              <li>• Access to certified counselors</li>
              <li>• Choice of communication medium</li>
              <li>• 24/7 support</li>
            </ul>
            <Button 
              className="w-full bg-sage-500 hover:bg-sage-600"
              onClick={() => navigate("/booking")}
            >
              Book First Session
            </Button>
          </Card>

          <Card className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-sage-500">Adult Plan</h2>
            <div className="text-3xl font-bold">$150<span className="text-lg font-normal text-gray-600">/session</span></div>
            <ul className="space-y-2 text-gray-600">
              <li>• Tailored for adults</li>
              <li>• Premium counselor matching</li>
              <li>• Flexible scheduling</li>
              <li>• Priority support</li>
            </ul>
            <Button 
              className="w-full bg-sage-500 hover:bg-sage-600"
              onClick={() => navigate("/booking")}
            >
              Book First Session
            </Button>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;