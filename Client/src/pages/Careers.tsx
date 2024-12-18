const Careers = () => {
  return (
    <div className="min-h-screen bg-sand-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-sage-600 mb-8">Careers</h1>
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-sage-500 mb-4">Join Our Team</h2>
            <p className="text-gray-600 mb-4">
              We're looking for passionate individuals who want to make a difference in mental health care.
            </p>
            <div className="space-y-4">
              <div className="border-t pt-4">
                <h3 className="font-medium text-sage-400">Licensed Therapist</h3>
                <p className="text-gray-600">Full-time position for licensed mental health professionals.</p>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-medium text-sage-400">Client Success Manager</h3>
                <p className="text-gray-600">Help our clients navigate their mental health journey.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Careers;