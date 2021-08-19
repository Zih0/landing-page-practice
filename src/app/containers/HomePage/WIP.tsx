import React, { forwardRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
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
        text-5xl
        lg:text-7xl
        font-bold
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

const WIP = forwardRef<any>((_, ref) => {
  return (
    <Container ref={ref}>
      <Title>ABOUT ME</Title>
      <AboutContainer>🛠WIP🛠</AboutContainer>
    </Container>
  );
});

export default WIP;
