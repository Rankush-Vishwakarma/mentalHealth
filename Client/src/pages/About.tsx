import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-sage-600 mb-12">
            About WellBeing
          </h1>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-6">
              WellBeing is a pioneering mental health platform dedicated to making professional counseling accessible, affordable, and convenient for students and young adults. Our mission is to break down barriers to mental health support and create a more resilient, emotionally intelligent generation.
            </p>

            <h2 className="text-2xl font-semibold text-sage-500 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We believe that everyone deserves access to quality mental health support. Our platform connects you with licensed professionals who can help you navigate life's challenges, whether you're dealing with stress, anxiety, depression, or just need someone to talk to.
            </p>

            <h2 className="text-2xl font-semibold text-sage-500 mt-8 mb-4">Our Approach</h2>
            <p className="text-gray-600 mb-6">
              We combine traditional counseling methods with innovative technology to provide a comprehensive mental health support system. Our platform offers flexible communication options including text, audio, and video sessions, making it easier for you to connect with your counselor in a way that feels comfortable.
            </p>

            <h2 className="text-2xl font-semibold text-sage-500 mt-8 mb-4">Our Team</h2>
            <p className="text-gray-600 mb-6">
              Our team consists of licensed mental health professionals, technology experts, and dedicated support staff working together to provide you with the best possible care. We carefully vet all our counselors to ensure they meet our high standards of professionalism and expertise.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;