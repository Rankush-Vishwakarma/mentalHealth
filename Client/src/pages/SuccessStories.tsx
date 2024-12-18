const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-sand-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-sage-600 mb-8">Success Stories</h1>
        <div className="space-y-8">
          <article className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-sage-500 mb-4">Sarah's Journey</h2>
            <p className="text-gray-600">
              "Through therapy, I learned to manage my anxiety and rediscovered my confidence."
            </p>
          </article>
          <article className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-sage-500 mb-4">Michael's Story</h2>
            <p className="text-gray-600">
              "The support I received helped me overcome depression and rebuild my relationships."
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;