"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, Send, 
  Home as HomeIcon, CheckCircle, Users, Headphones,
  Instagram, Facebook, Twitter, Linkedin, Globe,
  ArrowRight, Star, Calendar, Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log("Contact page loaded");
  console.log("Form data:", formData);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+971 50 XXX XXXX',
      subtitle: '24/7 Emergency Line',
      action: 'Call Now'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      details: '+971 50 XXX XXXX',
      subtitle: 'Quick Response',
      action: 'Chat Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: 'support@homizon.com',
      subtitle: 'General Inquiries',
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: 'Business Bay, Dubai',
      subtitle: 'UAE Headquarters',
      action: 'Get Directions'
    }
  ];

  const supportCategories = [
    'General Inquiry',
    'Service Booking',
    'Technical Support',
    'Billing Question',
    'Service Provider Application',
    'Partnership Inquiry',
    'Complaint/Feedback',
    'Emergency Service'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg mx-auto px-4"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-green rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h2>
          <p className="text-white/70 mb-8">
            Thank you for contacting us. Our team will get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black px-8 py-3 rounded-full">
                Back to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => setIsSubmitted(false)}
              className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full"
            >
              Send Another Message
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                Get in Touch
              </span>
              <br />
              <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                We're Here to Help
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Have questions? Need support? Our dedicated team is available 24/7 to assist you 
              with all your home service needs across Dubai.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Clock, label: '24/7 Support', value: 'Always Available' },
                { icon: Users, label: 'Happy Customers', value: '25,000+' },
                { icon: Star, label: 'Average Rating', value: '4.9/5' },
                { icon: Shield, label: 'Response Time', value: '< 2 Hours' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Methods */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 h-full hover:border-neon-blue/50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-green rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <contact.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
                    <p className="text-lg text-neon-blue font-medium mb-1">{contact.details}</p>
                    <p className="text-white/60 text-sm mb-4">{contact.subtitle}</p>
                    <Button 
                      variant="outline" 
                      className="text-white border-white/20 hover:bg-white/10 w-full"
                    >
                      {contact.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center space-x-3">
                    <Send className="h-6 w-6 text-neon-blue" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Full Name *</label>
                        <Input
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/50"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Email Address *</label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/50"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Phone Number</label>
                        <Input
                          placeholder="+971 50 XXX XXXX"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/50"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Category *</label>
                        <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent className="bg-neutral-900 border-white/20">
                            {supportCategories.map((category) => (
                              <SelectItem key={category} value={category} className="text-white hover:bg-white/10">
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Subject *</label>
                      <Input
                        placeholder="Brief description of your inquiry"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-white/50"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Message *</label>
                      <Textarea
                        placeholder="Please provide details about your inquiry..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-white/50 resize-none h-32"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black py-3 rounded-xl font-semibold"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Info & Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Location */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-neon-blue" />
                    <span>Our Office</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">HOMIZON Headquarters</h4>
                      <p className="text-white/70">
                        Business Bay Tower<br />
                        Level 25, Office 2501<br />
                        Business Bay, Dubai<br />
                        United Arab Emirates
                      </p>
                    </div>
                    <div className="h-48 bg-white/10 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.158834755037!2d55.26238!3d25.18725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sBusiness%20Bay%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1625655309953!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-neon-green" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { day: 'Monday - Friday', hours: '8:00 AM - 10:00 PM' },
                      { day: 'Saturday', hours: '9:00 AM - 8:00 PM' },
                      { day: 'Sunday', hours: '10:00 AM - 6:00 PM' },
                      { day: 'Emergency Services', hours: '24/7 Available', highlight: true }
                    ].map((schedule, index) => (
                      <div key={index} className={`flex justify-between items-center py-2 ${schedule.highlight ? 'bg-neon-green/10 rounded-lg px-3' : ''}`}>
                        <span className={`text-white ${schedule.highlight ? 'font-semibold' : ''}`}>{schedule.day}</span>
                        <span className={`${schedule.highlight ? 'text-neon-green font-semibold' : 'text-white/70'}`}>{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center space-x-3">
                    <Globe className="h-6 w-6 text-neon-blue" />
                    <span>Follow Us</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {[
                      { icon: Instagram, name: 'Instagram', color: 'from-pink-500 to-purple-500' },
                      { icon: Facebook, name: 'Facebook', color: 'from-blue-600 to-blue-700' },
                      { icon: Twitter, name: 'Twitter', color: 'from-blue-400 to-blue-500' },
                      { icon: Linkedin, name: 'LinkedIn', color: 'from-blue-700 to-blue-800' }
                    ].map((social, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center`}
                      >
                        <social.icon className="h-6 w-6 text-white" />
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-16">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Need Quick Answers?</h2>
            <p className="text-white/60 text-lg">Check out our frequently asked questions or book a service directly</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black px-8 py-3 rounded-full font-semibold">
                View FAQ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/book">
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold">
                <Calendar className="mr-2 h-5 w-5" />
                Book Service Now
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}