import { Code } from 'lucide-react';
import React from 'react';

const AboutMe = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          <span className='text-primary'>About</span> Me
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Passionate Web Developer</h3>
            <p className='text-muted-foreground'>
              I love building visually appealing, responsive, and performance-driven websites. With a focus on clean code and seamless user experience, I enjoy turning ideas into digital reality.
            </p>
            <p className='text-muted-foreground'>
              My goal is to craft experiences that are not only functional but also enjoyable. I'm always learning and experimenting with new technologies to stay on the cutting edge.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>Get in Touch</a>
              <a href="#contact" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 hover:border-amber-50 hover:text-amber-50'>
                Download CV
              </a>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-semibold text-lg'>Clean Code</h4>
                  <p className='text-muted-foreground text-sm'>
                    I follow best practices and write maintainable, readable, and scalable code for every project.
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-semibold text-lg'>Responsive Design</h4>
                  <p className='text-muted-foreground text-sm'>
                    I make sure that every design works flawlessly across all screen sizes and devices.
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-semibold text-lg'>Performance Focus</h4>
                  <p className='text-muted-foreground text-sm'>
                    I optimize web apps for speed and efficiency, improving both SEO and user retention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
