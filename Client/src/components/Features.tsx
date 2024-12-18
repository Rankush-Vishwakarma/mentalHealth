import { MessageSquare, Video, Headphones, Heart } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Text Counseling",
      description:
        "Connect with therapists through secure messaging at your own pace",
    },
    {
      icon: Video,
      title: "Video Sessions",
      description: "Face-to-face virtual sessions for a more personal connection",
    },
    {
      icon: Headphones,
      title: "Audio Therapy",
      description: "Voice-only sessions for comfortable communication",
    },
    {
      icon: Heart,
      title: "WellBeingAI Support",
      description:
        "24/7 AI-powered emotional support and preliminary mental health screening",
    },
  ];

  return (
    <div className="py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-sage-400 sm:text-4xl">
            Comprehensive Mental Health Support
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Choose the communication style that works best for you
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-sage-300 rounded-full p-3">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="pt-8 text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};