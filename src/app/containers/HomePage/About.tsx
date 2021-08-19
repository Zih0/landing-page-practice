import React, { forwardRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Button';

const Container = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3
        pb-3 
        md:mt-10
        lg:mt-36
        md:pl-24
        md:pr-24
    `}
`;

const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
        justify-around
        items-center
        w-full
        sm:flex-row
    `}
`;

const Title = styled.h2`
  ${tw`
        text-4xl
        lg:text-5xl
        text-black
        font-extrabold
        mb-12
        md:mb-24
    `}
`;

const LeftContainer = styled.div`
  ${tw`
        w-1/2
        flex
        flex-col
        items-center
        justify-center
        text-base
        md:text-xl
    `}
`;

const RightContainer = styled.div`
  ${tw`
        w-1/2
        flex
        flex-col
        flex-wrap
        justify-center
        items-center
        md:w-1/4

    `}
`;
const Skill = styled.h4`
  ${tw`
        text-2xl
        lg:text-3xl
        text-black
        font-extrabold
        mb-4
    `}
`;
const SkillList = styled.div`
  ${tw`
        flex
        flex-wrap
    `}
`;

const Skills = [
  'Node.js',
  'Express',
  'mongoDB',
  'MySQL',
  'Django',
  'HTML',
  'CSS',
  'JS',
  'React.js',
  'TS',
  'Python',
  'AWS',
];

const About = forwardRef<any>((_, ref) => {
  return (
    <Container ref={ref}>
      <Title>ABOUT ME</Title>
      <AboutContainer>
        <LeftContainer>
          <span>
            안녕하세요!
            <br />
            새로운 걸 배우는걸 즐기고 기록하는 것을 좋아합니다.
            <br />
            원하는건 혼자 뚝딱 만들 수 있는 풀스택 개발자가 되고 싶습니다. 😊
          </span>
        </LeftContainer>
        <RightContainer>
          <Skill>SKILL</Skill>
          <SkillList>
            {Skills.map((skill) => (
              <Button theme="filled" key={skill}>
                <p>{skill}</p>
              </Button>
            ))}
          </SkillList>
        </RightContainer>
      </AboutContainer>
    </Container>
  );
});

export default About;
