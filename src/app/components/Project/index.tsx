/* eslint-disable react/jsx-no-target-blank */
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IProject } from '../../../typings/project';

interface IProjectProps extends IProject {}

const ProjectContainer = styled.div`
  max-width: 16.5em;
  min-height: 18em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        flex-col
        items-center
        p-3
        pb-4
        bg-white
        rounded-md
        m-1
        sm:m-3
        md:m-6
    `}
`;

const ProjectThumbnail = styled.div`
  ${tw`
        flex
        flex-col
        justify-center
    `}
  width: 100%;
  height: 15em;
  img {
    width: 100%;
    height: auto;
  }
`;

const ProjectName = styled.h3`
  ${tw`
        text-base
        font-bold
        text-black
        mt-3
    `}
`;

const SkillContainer = styled.div`
  ${tw`
        w-full
        flex
        justify-start
        mt-3
    `}
`;
const Skill = styled.h5`
  ${tw`
        text-black
        font-semibold
        text-sm
        mr-3
    `}
`;

const GithubIcon = styled.span`
  ${tw`
        mt-2
        w-full
        text-right
        text-2xl
        mr-1
        duration-300
        hover:text-gray-500
    `}
`;

const DescriptionContainer = styled.div`
  ${tw`
        flex
        w-full
        mt-2
        justify-between
    `}
`;

const Description = styled.span`
  ${tw`
        flex
        items-center
        text-sm
    `}
`;

function Project({
  thumbnailSrc,
  name,
  skills,
  description,
  github,
}: IProjectProps) {
  return (
    <ProjectContainer>
      <ProjectThumbnail>
        <img src={thumbnailSrc} alt="" />
      </ProjectThumbnail>
      <ProjectName>{name}</ProjectName>
      <SkillContainer>
        {skills.map((skill, idx) => (
          <Skill>{skill}</Skill>
        ))}
      </SkillContainer>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
      <GithubIcon>
        <a href={github} target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </GithubIcon>
    </ProjectContainer>
  );
}

export default Project;
