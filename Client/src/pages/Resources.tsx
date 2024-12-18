const Resources = () => {
  return (
    <div className="min-h-screen bg-sand-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-sage-600 mb-8">Resources</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-sage-500 mb-4">Self-Help Guides</h2>
            <p className="text-gray-600">Access our collection of self-help guides and resources.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-sage-500 mb-4">Educational Materials</h2>
            <p className="text-gray-600">Browse through our educational content and materials.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;