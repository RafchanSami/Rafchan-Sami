import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Mail, Linkedin, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* YouTube Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 scale-150">
          <iframe
            src="https://www.youtube.com/embed/mOFoh9FUR8w?autoplay=1&mute=1&loop=1&playlist=mOFoh9FUR8w&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            className="w-full h-full object-cover opacity-40 grayscale blur-[2px]"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-neon-blue font-mono tracking-widest mb-4 text-sm md:text-base uppercase">
            Welcome to my digital universe
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
            I'm <span className="neon-glow text-neon-blue">Rafchan Sami</span>
          </h1>
          <div className="text-xl md:text-3xl font-light text-zinc-300 mb-10 h-10">
            <Typewriter
              words={['Full Stack Developer', 'UI Designer', 'Freelancer', 'Problem Solver']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <motion.a
              href="https://drive.google.com/file/d/1MJk7kXiiaO1P4vXVHP2BJPecZAf8H15g/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-neon-blue text-black font-bold rounded-full shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] transition-all duration-300"
            >
              Download Resume
            </motion.a>
            <div className="flex items-center space-x-6">
              {[
                { icon: Github, href: 'https://github.com/RafchanSami', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:rafchansami@gmail.com', label: 'Email' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="p-3 glass rounded-full text-zinc-400 hover:text-neon-blue hover:border-neon-blue/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-8 py-4 glass-card inline-flex items-center group cursor-pointer hover:bg-neon-blue/10"
            >
              <span className="mr-2 font-medium">Explore My Work</span>
              <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-zinc-500"
      >
        <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neon-blue rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
