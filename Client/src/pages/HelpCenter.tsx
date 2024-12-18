const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-sand-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-sage-600 mb-8">Help Center</h1>
        <div className="space-y-6">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-sage-500 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sage-400">How do I book a session?</h3>
                <p className="text-gray-600">You can book a session directly through our platform by selecting your preferred therapist and available time slot.</p>
              </div>
              <div>
                <h3 className="font-medium text-sage-400">What if I need to cancel?</h3>
                <p className="text-gray-600">Cancellations can be made up to 24 hours before your scheduled session without any charge.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;