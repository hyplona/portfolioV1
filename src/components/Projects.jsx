import { ArrowRight } from 'lucide-react'
import React from 'react'

const projects = [
  {
    id: 1,
    title: "AI-powered women networking site",
    description: "A platform for women to connect and collaborate, enhanced by AI for smart suggestions.",
    image: "/projects/1.png",
    tags: ["React", "TailwindCSS", "Netlify"],
  },
  {
    id: 2,
    title: "AI-powered women networking site",
    description: "A platform for women to connect and collaborate, enhanced by AI for smart suggestions.",
    image: "/projects/2.png",
    tags: ["React", "TailwindCSS", "Netlify"],
  },
  {
    id: 3,
    title: "AI-powered women networking site",
    description: "A platform for women to connect and collaborate, enhanced by AI for smart suggestions.",
    image: "/projects/3.png",
    tags: ["React", "TailwindCSS", "Netlify"],
  }
]

const Projects = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          <span className='text-primary'>Featured Projects</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          A collection of my recent work. These projects showcase my skills in modern frontend development and my passion for creating user-focused experiences.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div key={project.id} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
              <div className='h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>
              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, index) => (
                    <span key={index} className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <a href='https://github.com/hyplona' target='_blank' rel='noopener noreferrer' className='cosmic-button inline-flex items-center gap-2'>
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects;
