import React from 'react';

const Skills = () => {
  const experienceCategories = [
    {
      title: 'Backend',
      color: 'from-purple-500 to-cyan-500',
      technologies: [
        { name: 'Node.js', icon: '🟢' },
        { name: '.NET', icon: '🔷' },
        { name: 'MongoDB', icon: '🍃' },
      ],
    },
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React', icon: '⚛️' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'CSS', icon: '🎨' },
        { name: 'HTML', icon: '🌐' },
      ],
    },
    {
      title: 'Design',
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'Figma', icon: '🎨' },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container bg-gradient-to-br from-cyan-50/70 via-blue-50/60 to-indigo-50/70 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-purple-600 bg-purple-50 rounded-full">
            Experience
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="font-serif text-6xl md:text-7xl italic">My</span>{' '}
            <span className="gradient-text font-handwriting-bold text-5xl md:text-6xl">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif italic">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experienceCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300`}
              ></div>
              
              <div className="relative glass-effect p-8 rounded-3xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-3 border border-white/30">
                <div className={`w-20 h-20 mb-6 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex} 
                      className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105 border border-white/30"
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-semibold text-gray-800 text-lg">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
