import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management and payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/project1.jpg',
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    technologies: ['React', 'Firebase', 'Material UI'],
    image: '/project2.jpg',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing projects and skills with smooth animations.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '/project3.jpg',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Projects</h2>
      </div>
    </section>
  );
};

export default Projects; 