const Privacy = () => {
  return (
    <div className="min-h-screen bg-sand-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-sage-600 mb-8">Privacy Policy</h1>
        <div className="bg-white p-8 rounded-lg shadow space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-sage-500 mb-4">Your Privacy Matters</h2>
            <p className="text-gray-600">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-sage-500 mb-4">Information We Collect</h2>
            <p className="text-gray-600">
              We collect information that you provide directly to us, including your name, contact information, and any other information you choose to provide.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;