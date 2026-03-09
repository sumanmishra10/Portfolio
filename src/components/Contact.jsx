import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MapPin, Send, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="pt-24 pb-12 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-primary/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
          <p className="mt-6 text-text-muted text-lg max-w-2xl mx-auto">
            Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <a href="mailto:suman6mishra@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-surface border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all shadow-sm">
                  <Mail className="text-primary group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-xl font-medium text-white group-hover:text-primary transition-colors">suman6mishra@gmail.com</p>
                </div>
              </a>
              <a href="mailto:beingsuman10@gmail.com" className="flex items-center gap-6 group ml-[5.5rem]">
                <div>
                  <p className="text-xl font-medium text-white group-hover:text-primary transition-colors">beingsuman10@gmail.com</p>
                </div>
              </a>
            </div>

            <a href="tel:+9779820344113" className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-surface border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all shadow-sm">
                <Phone className="text-primary group-hover:text-white transition-colors" size={24} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-1">Phone</h4>
                <p className="text-xl font-medium text-white group-hover:text-primary transition-colors">+977 9820344113</p>
              </div>
            </a>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-surface border border-white/10 flex items-center justify-center shadow-sm">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-1">Location</h4>
                <p className="text-xl font-medium text-white">Bhaktapur, Nepal</p>
              </div>
            </div>
            
            {/* Socials */}
            <div className="pt-6 flex gap-4 border-t border-white/10">
              <a href="https://github.com/sumanmishra10" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all" title="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/suman-mishra-a52999369/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/whysumann/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all" title="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/__suman.mishra__/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all" title="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass p-8 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Message</label>
                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Hi, I think we need a design system for our products..."></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-primary/50">
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Suman Mishra. All rights reserved. 
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
