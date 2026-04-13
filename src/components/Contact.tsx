import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Have a project in mind or just want to say hello? Drop me a message and I'll get back to you as soon as possible.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Let's <span className="text-neon-blue">Connect</span></h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I'm always open to new opportunities, collaborations, or just a friendly chat about technology and design.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: Mail, label: 'Email', value: 'rafchansami@gmail.com', href: 'mailto:rafchansami@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
              { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#' }
            ].map((item, i) => (
              <div key={i} className="flex items-center group">
                <div className="p-4 glass rounded-2xl text-neon-blue group-hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300 mr-6">
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-widest font-medium">{item.label}</p>
                  <a href={item.href} className="text-white text-lg font-medium hover:text-neon-blue transition-colors">
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <p className="text-zinc-500 text-sm uppercase tracking-widest font-medium mb-6">Follow Me</p>
            <div className="flex space-x-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-4 glass rounded-xl text-zinc-400 hover:text-neon-blue hover:border-neon-blue/50 transition-all duration-300"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-400 ml-1">Full Name</label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-1">Email Address</label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-400 ml-1">Your Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300 group",
                isSuccess 
                  ? "bg-green-500 text-white" 
                  : "bg-neon-blue text-black hover:shadow-[0_0_20px_rgba(0,245,255,0.6)]"
              )}
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : isSuccess ? (
                "Message Sent!"
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
