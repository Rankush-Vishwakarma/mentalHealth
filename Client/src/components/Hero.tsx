import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-sage-400 sm:text-6xl animate-fadeIn">
              Your mental wellness journey starts here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Professional counseling tailored for students and young adults. Connect with expert therapists through text, audio, or video sessions.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                  src="https://bcdn.mindler.com/bloglive/wp-content/uploads/2019/03/11113602/How-to-Become-a-Counsellor-in-India.png"
                  alt="Counseling session"
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full animate-fadeIn"
                />
              </div>
              <Button
                onClick={() => navigate("/book")}
                className="bg-sage-300 hover:bg-sage-400 text-white px-8 py-6 text-lg rounded-full transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                Book a Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};