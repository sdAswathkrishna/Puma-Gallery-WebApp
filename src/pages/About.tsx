
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const milestones = [
    { year: "1948", event: "Puma founded by Rudolf Dassler" },
    { year: "1970", event: "First World Cup victory with Pelé" },
    { year: "1986", event: "Introduction of innovative Trinomic technology" },
    { year: "2020", event: "Sustainability commitment: Forever Better" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries in sports technology and design",
      icon: "🚀"
    },
    {
      title: "Performance",
      description: "Empowering athletes to achieve their best",
      icon: "⚡"
    },
    {
      title: "Sustainability",
      description: "Committed to a better future for our planet",
      icon: "🌱"
    },
    {
      title: "Inclusivity",
      description: "Sport for all, regardless of background or ability",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 puma-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 puma-gradient-text slide-in-up">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-delay">
              For over 75 years, Puma has been at the forefront of sport and culture, 
              creating innovative products that enable athletes to run faster, jump higher, and play harder.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 puma-gradient-text">Forever Faster</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is simple: to be the fastest sports company in the world. 
                We achieve this through our relentless pursuit of innovation, our passion for sport, 
                and our commitment to our athletes and consumers.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From the track to the street, from the gym to the runway, Puma products 
                are designed to enhance performance while making a bold style statement.
              </p>
              <Button size="lg" className="puma-gradient text-white hover:opacity-90">
                Our Products
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center"
                alt="Puma athlete in action"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-puma-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 puma-gradient-text">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className={`text-center hover-lift fade-in-delay`} style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 puma-gradient-text">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 puma-gradient-text">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in Puma's history
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex items-center space-x-6 fade-in-delay`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 puma-gradient rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-lg shadow-lg border">
                    <h3 className="text-xl font-bold text-puma-red mb-2">{milestone.year}</h3>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 puma-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Puma by Numbers</h2>
            <p className="text-xl opacity-90">Our global impact in sports and lifestyle</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">75+</h3>
              <p className="text-lg opacity-90">Years of Excellence</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">120+</h3>
              <p className="text-lg opacity-90">Countries Served</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">16K+</h3>
              <p className="text-lg opacity-90">Employees Worldwide</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">€8B+</h3>
              <p className="text-lg opacity-90">Annual Revenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-puma-light-gray">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 puma-gradient-text">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of a company that's passionate about sport, innovation, and making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="puma-gradient text-white hover:opacity-90 px-8">
              View Careers
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
