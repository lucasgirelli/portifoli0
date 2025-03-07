import React from 'react';
import { Github, Linkedin, ExternalLink, Code2, Database, Wrench, Layout } from 'lucide-react';
import { projects } from './data/projects';

function App() {
  const skillCategories = [
    {
      title: 'Front-end',
      icon: <Layout className="w-6 h-6 text-emerald" />,
      skills: ['HTML', 'CSS', 'React']
    },
    {
      title: 'Back-end',
      icon: <Code2 className="w-6 h-6 text-emerald" />,
      skills: ['Python', 'C', 'C#', 'Java']
    },
    {
      title: 'Banco de Dados',
      icon: <Database className="w-6 h-6 text-emerald" />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Tecnologias e Ferramentas',
      icon: <Wrench className="w-6 h-6 text-emerald" />,
      skills: ['Excel', 'GitHub', 'Git', 'Linux']
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-white tech-grid relative">
      {/* Header/Navigation */}
      <header className="fixed w-full glass-effect z-50 tech-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-emerald animate-pulse-slow">Lucas Girelli</h1>
            <div className="flex items-center gap-4">
              <a href="#about" className="text-blue-gray hover:text-emerald transition-all hover:scale-105">Sobre</a>
              <a href="#skills" className="text-blue-gray hover:text-emerald transition-all hover:scale-105">Habilidades</a>
              <a href="#certificates" className="text-blue-gray hover:text-emerald transition-all hover:scale-105">Certificados</a>
              <a href="#projects" className="text-blue-gray hover:text-emerald transition-all hover:scale-105">Projetos</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with About */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
            <div className="flex-1 slide-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Olá, eu sou o<br />
                <span className="text-emerald animate-pulse-slow">Lucas Girelli</span>
              </h1>
              <p className="text-xl text-blue-gray mb-8 fade-in">
                Estudante de Ciência da Computação na UVV, apaixonado por desenvolvimento e tecnologia. 
                Busco constantemente aprender e me aperfeiçoar, combinando criatividade com soluções técnicas.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/lucasgirelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full hover:bg-emerald hover:text-white transition-all hover:scale-110 animate-float"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/lucas-girelli-bezerra-62ab69300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full hover:bg-emerald hover:text-white transition-all hover:scale-110 animate-float"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/fotos/minhaFoto"
                alt="Lucas Girelli"
                className="w-64 h-64 rounded-full object-cover animate-glow animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-dark-light tech-grid relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-emerald animate-pulse-slow">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-effect rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-emerald">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-dark text-blue-gray hover:text-emerald transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 glass-effect">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-emerald animate-pulse-slow">Certificados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-dark-light/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all glass-effect">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-gray">Certificado Cisco - Ciência de Dados</h3>
                <p className="text-blue-gray mb-4">
                  Formação completa em conceitos fundamentais de Data Science, incluindo análise de dados,
                  visualização e técnicas estatísticas aplicadas.
                </p>
                <a
                  href="https://www.credly.com/badges/ce8eda40-6431-429b-8df7-228fa77d20c8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-emerald hover:text-blue-gray transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver certificado
                </a>
              </div>
            </div>
            <div className="bg-dark-light/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all glass-effect">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-gray">Certificado Cisco - Python</h3>
                <p className="text-blue-gray mb-4">
                  Especialização em programação Python, abrangendo estruturas de dados, algoritmos,
                  programação orientada a objetos e desenvolvimento de aplicações.
                </p>
                <a
                  href="https://www.credly.com/badges/3948c9b9-e560-4b8d-b43b-ab58a18e982e/linked_in?t=srwizn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-emerald hover:text-blue-gray transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver certificado
                </a>
              </div>
            </div>
            <div className="bg-dark-light/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all glass-effect">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-gray">Gestão de Projetos e Métodos Ágeis</h3>
                <p className="text-blue-gray mb-4">
                  Formação em gestão de projetos com foco em metodologias ágeis, incluindo Scrum, Kanban
                  e práticas de gerenciamento de equipes e recursos.
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-emerald hover:text-blue-gray transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver certificado
                </a>
              </div>
            </div>
            <div className="bg-dark-light/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all glass-effect">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-gray">Microsoft Excel 2026</h3>
                <p className="text-blue-gray mb-4">
                  Especialização avançada em Microsoft Excel, incluindo fórmulas complexas, análise de dados,
                  macros e automação de processos empresariais.
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-emerald hover:text-blue-gray transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver certificado
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark-light tech-grid relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-emerald animate-pulse-slow">Projetos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.title} 
                className="glass-effect rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-gray">{project.title}</h3>
                  <p className="text-blue-gray mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-emerald hover:text-blue-gray transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-emerald hover:text-blue-gray transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-effect py-8 tech-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-gray">© 2024 Lucas Girelli. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://github.com/lucasgirelli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-gray hover:text-emerald transition-all hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-girelli-bezerra-62ab69300"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-gray hover:text-emerald transition-all hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;