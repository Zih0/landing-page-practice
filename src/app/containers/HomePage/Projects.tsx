import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IProject } from "../../../typings/project";
import Project from "../../components/Project";

import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

const ProjectsContainer = styled.div`
	${tw`
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mt-20
        mb-10
    `}
`;

const Title = styled.h2`
	${tw`
        text-4xl
        lg:text-5xl
        text-black
        font-extrabold
    `}
`;

const ProjectContainer = styled.div`
	${tw`
        w-full
        flex
        flex-wrap
        justify-evenly
        items-center
        mt-7
        md:mt-10
        mb-20
    `}
`;

const project1: IProject = {
	name: "Catch-Nichi",
	thumbnailSrc:
		"https://user-images.githubusercontent.com/60956392/126294684-66314910-466c-4ed7-a760-7266529aaabc.png",
	skills: ["Node.js", "Express", "AWS", "Mysql"],
	description: "향수 추천 리뷰 어플리케이션",
	github: "https://github.com/Catchi-Nichi/Catchinichi-SERVER",
};
const project2: IProject = {
	name: "CLink ",
	thumbnailSrc:
		"https://user-images.githubusercontent.com/60956392/126295323-6f02a9ee-20fd-4a89-aaf8-7300a0aa95a2.png",
	skills: ["React", "Next.js", "TypeScript"],
	description: "중앙대학교 블록체인 동아리 안내 사이트",
	github: "https://github.com/CAU-CLINK/clink-homepage",
};
const project3: IProject = {
	name: "PETCH",
	thumbnailSrc:
		"https://user-images.githubusercontent.com/60956392/126867490-19a61655-cc79-488a-9a2a-60c9f6477361.png",
	skills: ["Django", "MongoDB"],
	description: "유기동물 이동봉사 어플리케이션",
	github: "https://github.com/PETCH-KR/Backend-Django",
};
//About = forwardRef<any>((_, ref) => {
const Projects = forwardRef<any>((_, ref) => {
	const [current, setCurrent] = useState(0);

	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

	const projectArr = [
		<Project {...project1} key={1} />,
		<Project {...project2} key={2} />,
		<Project {...project3} key={3} />,
	];

	return (
		<ProjectsContainer ref={ref}>
			<Title>PROJECTS</Title>
			<ProjectContainer>
				<Carousel
					value={current}
					onChange={setCurrent}
					slides={projectArr}
					plugins={[
						"clickToChange",
						{
							resolve: slidesToShowPlugin,
							options: {
								numberOfSlides: 3,
							},
						},
					]}
					breakpoints={{
						640: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 1,
									},
								},
							],
						},
						900: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 2,
									},
								},
							],
						},
					}}
				/>
				<Dots
					value={current}
					onChange={setCurrent}
					number={isMobile ? projectArr.length : Math.ceil(projectArr.length / 3)}
				/>
			</ProjectContainer>
		</ProjectsContainer>
	);
});

export default Projects;
