
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "Understanding Consent in Professional Discipline",
      excerpt: "A comprehensive guide to the importance of clear, informed consent in all discipline practices and how to establish healthy boundaries.",
      category: "Education",
      readTime: "8 min read",
      date: "2024-01-15",
      featured: true
    },
    {
      title: "The Psychology Behind Discipline and Submission",
      excerpt: "Exploring the psychological aspects that make discipline meaningful and how understanding these elements enhances the experience.",
      category: "Psychology",
      readTime: "12 min read",
      date: "2024-01-08",
      featured: true
    },
    {
      title: "Safety Protocols in Professional Sessions",
      excerpt: "Essential safety measures every professional should follow and what clients should expect from a truly professional service.",
      category: "Safety",
      readTime: "6 min read",
      date: "2024-01-01",
      featured: false
    },
    {
      title: "Building Trust in Professional Relationships",
      excerpt: "How trust is established and maintained in professional discipline relationships, creating a foundation for meaningful experiences.",
      category: "Professional",
      readTime: "10 min read",
      date: "2023-12-25",
      featured: false
    },
    {
      title: "Aftercare: The Essential Component",
      excerpt: "Why aftercare is crucial for every session and how proper aftercare supports client well-being and session integration.",
      category: "Aftercare",
      readTime: "7 min read",
      date: "2023-12-18",
      featured: false
    },
    {
      title: "Communication Techniques for Difficult Conversations",
      excerpt: "Effective strategies for discussing boundaries, limits, and desires in professional discipline contexts.",
      category: "Communication",
      readTime: "9 min read",
      date: "2023-12-11",
      featured: false
    },
    {
      title: "The Role of Ritual in Discipline Sessions",
      excerpt: "How incorporating meaningful rituals can enhance the psychological impact and significance of discipline experiences.",
      category: "Psychology",
      readTime: "11 min read",
      date: "2023-12-04",
      featured: false
    },
    {
      title: "Managing Expectations: A Guide for New Clients",
      excerpt: "What first-time clients should know about professional discipline services and how to prepare for their first session.",
      category: "Guidance",
      readTime: "8 min read",
      date: "2023-11-27",
      featured: false
    },
    {
      title: "Professional Development in the Discipline Field",
      excerpt: "The importance of ongoing education and training for discipline professionals and maintaining high standards.",
      category: "Professional",
      readTime: "6 min read",
      date: "2023-11-20",
      featured: false
    }
  ];

  const categories = ["All", "Education", "Psychology", "Safety", "Professional", "Aftercare", "Communication", "Guidance"];
  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Insights & Resources</h1>
          <p className="text-xl text-purple-100">
            Educational content about professional discipline, safety, and personal empowerment
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Articles</h2>
            <p className="text-xl text-slate-600">Essential reading for understanding professional discipline</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-br from-purple-50 to-pink-50">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-purple-600 text-white">{article.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-800 leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-slate-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-50 sticky top-16 z-40 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-purple-50 hover:border-purple-300 px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">All Articles</h2>
            <p className="text-xl text-slate-600">Comprehensive resources for education and growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-slate-800 leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-slate-600 mb-4 text-sm">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                    <ArrowRight className="h-3 w-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
          <p className="text-xl mb-8 text-purple-100">
            Subscribe to receive new articles and insights about professional discipline practices.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900"
              />
              <Button className="bg-white text-purple-600 hover:bg-purple-50">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-purple-100 mt-4">
              Your privacy is important. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
