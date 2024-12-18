import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
const Blog = () => {
  return (
    <div className="min-h-screen bg-sand-50">
       <Navbar />
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-sage-600 mb-8">Blog</h1>
        <div className="space-y-8">
          <article className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-sage-500 mb-4">Understanding Anxiety</h2>
            <p className="text-gray-600 mb-4">Learn about the different types of anxiety and coping strategies.</p>
            <a href="#" className="text-sage-400 hover:text-sage-500">Read more →</a>
          </article>
          <article className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-sage-500 mb-4">Mindfulness Techniques</h2>
            <p className="text-gray-600 mb-4">Discover practical mindfulness exercises for daily life.</p>
            <a href="#" className="text-sage-400 hover:text-sage-500">Read more →</a>
          </article>
        </div>
      </div>
       <Footer />
    </div>
  );
};

export default Blog;