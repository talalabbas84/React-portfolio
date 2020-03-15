import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';
import { Slideshow } from './Slideshow';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.displayName}</ProjectTitle>
              <p>{project.summary}</p>
              <a
                href={project.website}
                target='_blank'
                rel='noopener noreferrer'
              >
                {project.website}
              </a>
              <br />

              <br />
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                {project.githubUrl}
              </a>
              <br />
              <br />
              {project.images.length > 0 && <Slideshow user={project.images} />}
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
