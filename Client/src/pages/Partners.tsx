const Partners = () => {
  return (
    <div className="min-h-screen bg-sand-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-sage-600 mb-8">Partners</h1>
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-sage-500 mb-4">Our Partners</h2>
            <p className="text-gray-600 mb-8">
              We collaborate with leading organizations to provide comprehensive mental health support.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="text-center p-4">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
                <h3 className="font-medium text-sage-400">Healthcare Provider A</h3>
              </div>
              <div className="text-center p-4">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
                <h3 className="font-medium text-sage-400">Healthcare Provider B</h3>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Partners;