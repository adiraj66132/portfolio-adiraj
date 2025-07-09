import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin } from 'lucide-react';
import toast from 'react-hot-toast';

const XLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 20}
    height={props.height || 20}
    {...props}
  >
    <path
      d="M17.53 2.47a1.75 1.75 0 0 1 2.47 2.47L14.94 10l5.06 5.06a1.75 1.75 0 1 1-2.47 2.47L12.47 12l-5.06 5.06a1.75 1.75 0 1 1-2.47-2.47L9.06 10 3.99 4.94A1.75 1.75 0 1 1 6.47 2.47L12 8l5.53-5.53Z"
      fill="currentColor"
    />
  </svg>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message sent successfully! I\'ll get back to you soon.', {
      icon: '🚀',
      duration: 4000,
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "adirajk03@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9101358456",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India, Assam",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "#", color: "hover:text-gray-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
    { icon: XLogo, href: "#", color: "hover:text-cyan-400" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Get in Touch</h3>
            
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  }}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-medium text-white group-hover:text-gray-200 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <div className="pt-6">
              <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/adiraj66132",
                    color: "hover:text-gray-400",
                    label: "GitHub"
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/adiraj-kashyap-7b607736b/",
                    color: "hover:text-blue-400",
                    label: "LinkedIn"
                  },
                  {
                    // Inline SVG for X (Twitter) logo
                    icon: (props: React.SVGProps<SVGSVGElement>) => (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        {...props}
                      >
                        <path
                          d="M17.53 3H21L13.47 11.4L22.24 21H16.08L11.01 15.19L5.29 21H2L10.04 12.13L1.66 3H8.01L12.56 8.32L17.53 3ZM16.41 19.13H18.19L7.7 4.77H5.81L16.41 19.13Z"
                          fill="currentColor"
                        />
                      </svg>
                    ),
                    href: "https://x.com/adiraj_k03",
                    color: "hover:text-cyan-400",
                    label: "Twitter"
                  }
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
