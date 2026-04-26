import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { tj, blo, mers } from "../assets/images";


const projects = [
  {
    id: 1,
    title: 'Bike Lane Optimization Using Machine Learning and RL',
    description: 'RL agents trained on urban street networks generate bike lane allocations that reduce urban congestion, while achieving efficiency and transferability across different districts.',
    image: blo,
    tech: ['Python','wandb', 'gymnasium','geopandas','networkx','stable_baselines3','PPO','Deep Q-Networks'],
    github: 'https://github.com/arsh0570/bike_lane_ppo',
    report: 'http://rpubs.com/arsh26/bikeLaneOptimisation',
  },
  {
    id: 2,
    title: 'Malaysian Sign Language Translator',
    description: 'Machine Learning Model that translates Malaysian Sign Language (MSL) in real-time.',
    image: tj,
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Jupyter Notebook', 'MediaPipe', 'LSTM'],
    paper: 'https://www.researchgate.net/publication/378422479_REAL_TIME_MALAYSIAN_SIGN_LANGUAGE_TRANSLATOR_-_TUTURJOM',
  },
  {
    id: 3,
    title: 'MERLIN',
    description: 'Developed a scalable meta-reinforcement learning algorithm yeilding 21% higher reward for non-parametric task generalisation',
    image: mers,
    tech: ['Python', 'TensorFlow', 'Pytorch', 'Pandas', 'Numpy', 'Open AI gym', 'Mujoco', 'Windows Subsystem for Linux','Wandb'],
    paper: '11',
    paperStatus: 'under review',
  },
  {
    id: 4,
    title: 'Front Helper (An application for connected healthcare)',
    description: 'Participated in design and development of prototype app called Front Helper which acts as a connected healthcare system for various hospitals in Malaysia.',
    image: 'https://via.placeholder.com/600x400',
    tech: ['Adobe xd', 'Flutter'],
    github: 'https://github.com/arsh0570/fronthealth',
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const isNight = theme === 'night';


  return (
    <section className={`py-20 px-4 min-h-screen ${isNight ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isNight ? 'text-white' : 'text-gray-800'}`}>
          My Projects
        </h2>

        {projects.length === 0 && (
          <p className="text-center text-red-500">No projects found. Check your projects array.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
           
            if (!project.title) {
              console.warn('Project missing title:', project);
              return null;
            }

            return (
              <div
                key={project.id}
                className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col ${
                  isNight ? 'bg-gray-800' : 'bg-white'
                }`}
              >
              
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      console.error(`Failed to load image for ${project.title}:`, project.image);
                      e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
                    }}
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
                    No image
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <h3 className={`text-2xl font-semibold mb-2 ${isNight ? 'text-white' : 'text-gray-800'}`}>
                    {project.title}
                  </h3>

                  {project.description && (
                    <p className={`mb-4 flex-1 ${isNight ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                  )}

                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 text-sm rounded-full ${
                            isNight
                              ? 'bg-indigo-900 text-indigo-200'
                              : 'bg-indigo-100 text-indigo-800'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors ${
                          isNight
                            ? 'bg-gray-700 text-white hover:bg-gray-600'
                            : 'bg-gray-900 text-white hover:bg-gray-800'
                        }`}
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.335-1.76-1.335-1.76-1.09-.746.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.306.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.1.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}

                    {!project.live && project.paper && (
                      <a
                        href={project.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Paper {project.paperStatus === 'under review' && '(Under Review)'}
                      </a>
                    )}

                    {!project.live && !project.paper && project.report && (
                      <a
                        href={project.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Report
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;