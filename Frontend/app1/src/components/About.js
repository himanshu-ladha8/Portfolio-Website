import React from 'react';

const About = () => {
  const highlights = [
    {
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code that stands the test of time.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'User Focused',
      description: 'Designing experiences that users love and find intuitive.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description: 'Staying ahead with the latest technologies and best practices.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="section-container bg-gradient-to-br from-indigo-50/80 via-blue-50/60 to-cyan-50/80 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
            About Me
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="font-serif text-6xl md:text-7xl italic">Crafting Digital</span>{' '}
            <span className="gradient-text font-handwriting-bold text-5xl md:text-6xl">Experiences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed font-serif">
              I'm a passionate <span className="font-semibold text-gray-900 font-handwriting-bold text-2xl">Full Stack Developer</span> with expertise in building
              scalable web applications using modern technologies. I love turning
              complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-serif italic">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-handwriting-casual text-2xl">
              My goal is to create digital experiences that make a difference and
              bring value to users' lives.
            </p>
          </div>

          <div className="relative group flex justify-center items-center">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
            <div className="relative">
              {/* Photo Frame */}
              <div className="relative glass-effect p-4 rounded-3xl border border-white/30 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/profile-photo.JPG"
                    alt="Himanshu Ladha"
                    className="w-full h-auto rounded-2xl object-cover shadow-xl"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x500/667eea/ffffff?text=Your+Photo';
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-400 rounded-3xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative p-8 glass-effect rounded-3xl border border-white/30 hover:border-white/50 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300">
                <div className="w-20 h-20 mb-6 bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-400 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transform transition-all duration-300 shadow-lg">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 font-handwriting-bold text-2xl">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed font-serif">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
