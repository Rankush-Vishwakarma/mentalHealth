import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Business = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPerson: "",
    email: "",
    phone: "",
    employeeCount: "",
    requirements: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-sand-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center text-sage-600 mb-12">
          Enterprise Solutions
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Organization Name</label>
            <Input
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Contact Person</label>
            <Input
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Number of Employees</label>
            <Input
              type="number"
              name="employeeCount"
              value={formData.employeeCount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Requirements</label>
            <Textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              className="h-32"
              placeholder="Tell us about your organization's mental health support needs..."
              required
            />
          </div>

          <Button type="submit" className="w-full bg-sage-500 hover:bg-sage-600">
            Submit Request
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Business;