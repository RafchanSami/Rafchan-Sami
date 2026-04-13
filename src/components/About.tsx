import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';

const timeline = [
  {
    year: '2024 - Present',
    title: 'Class 8 Student',
    company: 'High School',
    icon: GraduationCap,
    description: 'Currently pursuing my secondary education while balancing academic studies with advanced web development learning.'
  },
  {
    year: '2023 - Present',
    title: 'Self-Taught Developer',
    company: 'Online Learning',
    icon: Briefcase,
    description: 'Mastering HTML, CSS, and JavaScript. Building real-world projects and exploring modern frameworks like React.'
  },
  {
    year: '2018 - 2023',
    title: 'Primary Education',
    company: 'Primary School',
    icon: GraduationCap,
    description: 'Completed primary schooling with a strong interest in computer science and digital creativity.'
  }
];

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="A passionate developer dedicated to crafting exceptional digital experiences." className="relative overflow-hidden">
      {/* YouTube Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 scale-150">
          <iframe
            src="https://www.youtube.com/embed/RR2EI8EEOOw?autoplay=1&mute=1&loop=1&playlist=RR2EI8EEOOw&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            className="w-full h-full object-cover opacity-20 grayscale blur-[4px]"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group mx-auto lg:mx-0"
        >
          <div className="absolute -inset-4 bg-neon-blue/20 rounded-2xl blur-2xl group-hover:bg-neon-blue/40 transition-all duration-500" />
          <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-neon-blue/30 shadow-[0_0_30px_rgba(0,245,255,0.2)]">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocILypF1qekDEWmMAGdIIBt5ajvIwAGyDn0E2MMAu9h80n5lecU=s288-c-no"
              alt="Rafchan Sami"
              className="w-full max-w-md aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-neon-blue/50 rounded-br-2xl z-0" />
          <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-neon-blue/50 rounded-tl-2xl z-0" />
        </motion.div>

        {/* Bio & Timeline */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              I build <span className="text-neon-blue">modern</span>, high-performance digital experiences.
            </h3>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Hi! I'm a Class 8 student with a strong interest in technology and programming. I love learning how websites and apps are built and enjoy creating my own projects using HTML, CSS, and JavaScript.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              I am passionate about improving my skills every day and exploring new ideas in web development. Even at a young age, I aim to build creative, modern, and user-friendly designs.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              My goal is to become a skilled software developer in the future and work on exciting real-world projects. I believe in learning by doing, and I am always ready to take on new challenges and grow my knowledge.
            </p>
          </motion.div>

          <div className="space-y-8">
            <h4 className="text-xl font-semibold text-neon-blue uppercase tracking-widest flex items-center">
              <Calendar className="mr-2" size={20} />
              Experience & Education
            </h4>
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex group"
                >
                  <div className="mr-6 flex flex-col items-center">
                    <div className="p-3 glass rounded-xl text-neon-blue group-hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300">
                      <item.icon size={24} />
                    </div>
                    {i !== timeline.length - 1 && <div className="w-0.5 h-full bg-zinc-800 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <span className="text-sm font-mono text-neon-blue/70">{item.year}</span>
                    <h5 className="text-xl font-bold text-white mt-1">{item.title}</h5>
                    <p className="text-zinc-500 font-medium mb-2">{item.company}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
