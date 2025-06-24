
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Future Rider Play On",
      price: "$80",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
      category: "Sneakers"
    },
    {
      id: 2,
      name: "RS-X Efekt",
      price: "$110",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center",
      category: "Running"
    },
    {
      id: 3,
      name: "Suede Classic XXI",
      price: "$70",
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop&crop=center",
      category: "Classics"
    }
  ];

  const handleShopCollection = () => {
    window.open('https://in.puma.com/in/en', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 puma-gradient opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&crop=center)'
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white px-4 slide-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            FOREVER
            <br />
            <span className="text-6xl md:text-8xl text-white">FASTER</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            Discover the latest collection of sports shoes, apparel, and accessories designed for peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-puma-black hover:bg-gray-100 px-8"
              onClick={handleShopCollection}
            >
              Shop Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-delay">
          <h2 className="text-4xl font-bold mb-4 puma-gradient-text">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular items, designed for athletes and lifestyle enthusiasts alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card key={product.id} className={`hover-lift cursor-pointer border-0 shadow-lg fade-in-delay`} style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-puma-gray font-medium mb-2">{product.category}</p>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold puma-gradient-text">{product.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="puma-gradient text-white hover:opacity-90 px-8"
            onClick={handleShopCollection}
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-puma-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold puma-gradient-text mb-2">75+</h3>
              <p className="text-gray-600">Years of Innovation</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold puma-gradient-text mb-2">120+</h3>
              <p className="text-gray-600">Countries Worldwide</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold puma-gradient-text mb-2">500M+</h3>
              <p className="text-gray-600">Athletes Inspired</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold puma-gradient-text mb-2">1000+</h3>
              <p className="text-gray-600">Products Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
