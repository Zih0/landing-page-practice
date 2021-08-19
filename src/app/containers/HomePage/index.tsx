import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import FixedButton from '../../components/FixedButton';
import Navbar from '../../components/Navbar';
import Contact from './Contact';
import Projects from './Projects';
// import About from './About';
import TopSection from './TopSection';
import WIP from './WIP';

const PageContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
		h-full
		items-center		
    `}
`;

function HomePage() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const onHomeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onProjectsClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onAboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageContainer ref={homeRef}>
      <Navbar
        onProjectsClick={onProjectsClick}
        onHomeClick={onHomeClick}
        onContactClick={onContactClick}
        onAboutClick={onAboutClick}
      />
      <TopSection />
      <WIP ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      {showButton && <FixedButton onHomeClick={onHomeClick} />}
    </PageContainer>
  );
}

export default HomePage;
