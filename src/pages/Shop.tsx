
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sneakers', 'Running', 'Training', 'Classics', 'Lifestyle'];

  const products = [
    {
      id: 1,
      name: "Future Rider Play On",
      price: "$80",
      originalPrice: "$100",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
      category: "Sneakers",
      isOnSale: true
    },
    {
      id: 2,
      name: "RS-X Efekt",
      price: "$110",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center",
      category: "Running",
      isOnSale: false
    },
    {
      id: 3,
      name: "Suede Classic XXI",
      price: "$70",
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop&crop=center",
      category: "Classics",
      isOnSale: false
    },
    {
      id: 4,
      name: "Cell Venom",
      price: "$90",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop&crop=center",
      category: "Lifestyle",
      isOnSale: false
    },
    {
      id: 5,
      name: "Velocity Nitro",
      price: "$120",
      originalPrice: "$150",
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop&crop=center",
      category: "Running",
      isOnSale: true
    },
    {
      id: 6,
      name: "Cali Sport",
      price: "$85",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center",
      category: "Lifestyle",
      isOnSale: false
    },
    {
      id: 7,
      name: "Ignite Flash",
      price: "$65",
      originalPrice: "$85",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
      category: "Training",
      isOnSale: true
    },
    {
      id: 8,
      name: "Mayze Platform",
      price: "$95",
      image: "https://images.unsplash.com/photo-1603787081207-362bcef7ad69?w=400&h=400&fit=crop&crop=center",
      category: "Sneakers",
      isOnSale: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleViewProduct = () => {
    window.open('https://in.puma.com/in/en', '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 puma-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Shop Collection</h1>
          <p className="text-xl opacity-90">Discover performance and style in every step</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "puma-gradient text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <Card key={product.id} className={`hover-lift cursor-pointer border-0 shadow-lg fade-in-delay`} style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  {product.isOnSale && (
                    <div className="absolute top-3 left-3 bg-puma-black text-white px-2 py-1 text-xs font-bold rounded z-10">
                      SALE
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-puma-gray font-medium mb-1">{product.category}</p>
                  <h3 className="font-semibold mb-2 text-sm">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold puma-gradient-text">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <Button 
                    className="w-full mt-3 puma-gradient text-white hover:opacity-90" 
                    size="sm"
                    onClick={handleViewProduct}
                  >
                    View Product
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-4">No products found matching your criteria.</p>
            <Button onClick={() => {setSearchQuery(''); setSelectedCategory('All');}} variant="outline">
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8">
              Load More Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
