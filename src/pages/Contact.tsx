
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: "Customer Service",
      details: ["1-800-PUMA-USA", "help@puma.com", "Mon-Fri: 9AM-8PM EST"],
      icon: "📞"
    },
    {
      title: "Store Locations",
      details: ["Find a store near you", "Store locator", "Visit our flagship stores"],
      icon: "📍"
    },
    {
      title: "Press & Media",
      details: ["press@puma.com", "Media resources", "Brand guidelines"],
      icon: "📰"
    },
    {
      title: "Careers",
      details: ["Join our team", "careers@puma.com", "Open positions"],
      icon: "💼"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 puma-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 slide-in-up">Get in Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto fade-in-delay">
            Have a question, feedback, or need support? We're here to help you every step of the way.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={info.title} className={`text-center hover-lift fade-in-delay`} style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="text-3xl mb-4">{info.icon}</div>
                <h3 className="text-lg font-bold mb-3 puma-gradient-text">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-gray-600">{detail}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 puma-gradient-text">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more..."
                  rows={6}
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full puma-gradient text-white hover:opacity-90">
                Send Message
              </Button>
            </form>
          </div>

          {/* Company Info Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 puma-gradient-text">Visit Our Headquarters</h2>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Puma SE</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Puma Way 1</p>
                  <p>91074 Herzogenaurach</p>
                  <p>Germany</p>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>Phone:</strong> +49 9132 81-0
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Email:</strong> info@puma.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4 puma-gradient-text">Office Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-puma-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 puma-gradient-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How can I track my order?",
                answer: "You can track your order using the tracking number sent to your email after purchase. Visit our order tracking page for real-time updates."
              },
              {
                question: "What is your return policy?",
                answer: "We offer a 30-day return policy for unworn items in original packaging. Returns are free for online purchases."
              },
              {
                question: "Do you offer international shipping?",
                answer: "Yes, we ship to over 120 countries worldwide. Shipping costs and delivery times vary by location."
              },
              {
                question: "How do I find the right size?",
                answer: "Use our size guide available on each product page. We also offer free exchanges if the size doesn't fit perfectly."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 puma-gradient-text">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
