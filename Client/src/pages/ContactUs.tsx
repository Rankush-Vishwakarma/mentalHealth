const ContactUs = () => {
  return (
    <div className="min-h-screen bg-sand-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-sage-600 mb-8">Contact Us</h1>
        <div className="bg-white p-8 rounded-lg shadow">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-sage-600">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-sage-600">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-sage-600">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-sage-500 text-white py-2 px-4 rounded-md hover:bg-sage-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;