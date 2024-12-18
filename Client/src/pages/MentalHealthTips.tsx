const MentalHealthTips = () => {
  return (
    <div className="min-h-screen bg-sand-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-sage-600 mb-8">Mental Health Tips</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-sage-500 mb-4">Daily Practices</h2>
            <ul className="space-y-4 text-gray-600">
              <li>Practice mindful breathing</li>
              <li>Maintain a regular sleep schedule</li>
              <li>Exercise regularly</li>
              <li>Stay connected with loved ones</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-sage-500 mb-4">Stress Management</h2>
            <ul className="space-y-4 text-gray-600">
              <li>Set realistic goals</li>
              <li>Take regular breaks</li>
              <li>Practice gratitude</li>
              <li>Learn to say no</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthTips;