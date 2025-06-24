
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, X } from 'lucide-react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Running Technology",
      excerpt: "Discover how Puma's latest innovations are revolutionizing the running experience with advanced cushioning and energy return.",
      fullContent: "Puma continues to push the boundaries of running technology with innovative designs that enhance performance and comfort. Our latest research focuses on advanced cushioning systems that provide optimal energy return, helping athletes achieve their personal best. From professional marathoners to weekend warriors, our technology adapts to every runner's needs, ensuring maximum comfort and performance mile after mile.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      category: "Innovation",
      date: "Dec 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Sustainability in Sports Fashion",
      excerpt: "Learn about Puma's commitment to sustainable manufacturing and how we're reducing our environmental footprint.",
      fullContent: "At Puma, we believe that great performance shouldn't come at the expense of our planet. Our sustainability initiatives include using recycled materials, reducing water consumption in manufacturing, and implementing circular design principles. We're committed to creating products that perform exceptionally while minimizing environmental impact, ensuring a better future for athletes and the planet.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center",
      category: "Sustainability",
      date: "Dec 12, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Training Like a Pro: Tips from Puma Athletes",
      excerpt: "Get insider training tips and workout routines from professional athletes sponsored by Puma.",
      fullContent: "Learn from the best as our sponsored athletes share their training secrets, workout routines, and mental preparation strategies. From Olympic champions to rising stars, discover how dedication, proper equipment, and smart training can unlock your athletic potential. These insights from professional athletes will help you elevate your performance and achieve your fitness goals.",
      image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=600&h=400&fit=crop&crop=center",
      category: "Training",
      date: "Dec 10, 2024",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Street Style Meets Athletic Performance",
      excerpt: "Explore how Puma is bridging the gap between high-performance athletic wear and street fashion trends.",
      fullContent: "The line between athletic wear and street fashion continues to blur, and Puma is at the forefront of this evolution. Our designs seamlessly blend high-performance functionality with contemporary style, creating pieces that transition effortlessly from the gym to the street. Discover how our collaborations with fashion designers and cultural icons are shaping the future of sportswear.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop&crop=center",
      category: "Lifestyle",
      date: "Dec 8, 2024",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Women in Sports: Breaking Barriers",
      excerpt: "Celebrating female athletes who are redefining what's possible in sports and inspiring the next generation.",
      fullContent: "Female athletes continue to break barriers and redefine what's possible in sports. At Puma, we're proud to support women who are not only achieving incredible athletic feats but also inspiring the next generation of female athletes. From grassroots programs to professional sponsorships, we're committed to empowering women in sports and creating opportunities for growth and success.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=400&fit=crop&crop=center",
      category: "Inspiration",
      date: "Dec 5, 2024",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "The Science Behind Our Best-Selling Sneakers",
      excerpt: "Dive deep into the research and development process that goes into creating Puma's most popular footwear.",
      fullContent: "Behind every great sneaker is years of research, testing, and innovation. Our design team works closely with biomechanics experts, material scientists, and athletes to create footwear that not only looks great but performs exceptionally. From concept to final product, discover the rigorous process that ensures each Puma sneaker meets the highest standards of quality and performance.",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop&crop=center",
      category: "Innovation",
      date: "Dec 2, 2024",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "Innovation", "Sustainability", "Training", "Lifestyle", "Inspiration"];

  const openPost = (postId: number) => {
    setSelectedPost(postId);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  const selectedPostData = blogPosts.find(post => post.id === selectedPost);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 puma-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 slide-in-up">Puma Stories</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto fade-in-delay">
            Stay updated with the latest news, insights, and stories from the world of Puma
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="hover:puma-gradient hover:text-white transition-colors"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-2xl hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img 
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-puma-black text-white text-sm font-medium rounded-full mb-4 w-fit">
                  Featured
                </span>
                <h2 className="text-3xl font-bold mb-4 puma-gradient-text">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                  <span>{blogPosts[0].category}</span>
                  <span>{blogPosts[0].date}</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Button 
                  className="puma-gradient text-white hover:opacity-90 w-fit"
                  onClick={() => openPost(blogPosts[0].id)}
                >
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={post.id} className={`hover-lift cursor-pointer shadow-lg fade-in-delay`} style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-gray-100 rounded text-puma-gray font-medium">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-puma-black hover:bg-puma-black hover:text-white"
                      onClick={() => openPost(post.id)}
                    >
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            Load More Articles
          </Button>
        </div>
      </div>

      {/* Article Modal */}
      {selectedPost && selectedPostData && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold puma-gradient-text">{selectedPostData.title}</h2>
              <Button variant="ghost" size="sm" onClick={closePost}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-6">
              <img 
                src={selectedPostData.image}
                alt={selectedPostData.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                <span className="px-2 py-1 bg-gray-100 rounded">{selectedPostData.category}</span>
                <span>{selectedPostData.date}</span>
                <span>{selectedPostData.readTime}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{selectedPostData.fullContent}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
