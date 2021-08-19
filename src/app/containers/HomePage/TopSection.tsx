import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MyImg from "../../../assets/images/character.png";
import { SCREENS } from "../../components/responsive";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

const TopSectionContainer = styled.div`
	min-height: 350px;
	margin-top: 6em;
	${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        md:pl-24
        md:pr-24
    `};
`;

const LeftContainer = styled.div`
	${tw`
        w-1/2
        flex
        flex-col
		mt-3
    `}
`;

const RightContainer = styled.div`
	${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `}
`;

const Introduction = styled.h1`
	${tw`
        font-bold
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:font-black
        xl:text-6xl
        md:font-extrabold
        text-black
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
        mb-4
		`}
`;

const Description = styled.p`
	font-family: "Titillium Web", sans-serif;
	${tw`
        text-base
		md:text-lg
        lg:text-xl
        xl:text-2xl
        sm:max-h-full
        max-h-12
        text-gray-800
        border-b-2
    `}
`;

const ImgBox = styled.div`
	width: 15em;
	height: auto;
	right: -1em;
	top: -8em;
	position: absolute;

	img {
		width: 100%;
		height: auto;
		max-width: fit-content;
	}

	@media (min-width: ${SCREENS.sm}) {
		width: 20em;
		right: 0em;
		top: -10em;
	}
	@media (min-width: ${SCREENS.lg}) {
		width: 25em;
		right: 0em;
		top: -10em;
	}

	@media (min-width: ${SCREENS.xl}) {
		width: 30em;
		right: 2em;
		top: -11em;
	}
`;

const ButtonsContainer = styled.div`
	${tw`
	mt-4
	flex
	flex-wrap
	gap-2
	md:gap-4
	`}
`;

const AnimateSpan = styled.span`
	${tw`
		inline-block
		transition-all
		animate-wiggle
		hover:animate-none
		ease-in-out
		
	`}
`;

const SnsIcon = styled.a`
	${tw`
		duration-300
		hover:text-gray-300
		text-base
		md:text-xl
		cursor-pointer
	`}
`;

const ContactContainer = styled.div`
	font-family: "Titillium Web", sans-serif;
	${tw`
		flex
		flex-col
		mt-2
	`}
`;

const ContactDescription = styled.span`
	${tw`
		font-normal
		text-xs
		md:text-base
		duration-300
		hover:text-gray-300
	`}
`;

function TopSection() {
	return (
		<TopSectionContainer>
			<LeftContainer>
				<Introduction>
					HI<AnimateSpan>👋</AnimateSpan>
					<br />
					I'M SHIN JIHO
				</Introduction>
				<Description>WEB DEVELOPER</Description>
				<ContactContainer>
					<ContactDescription>
						<FontAwesomeIcon icon={faEnvelope} /> ziho@kakao.com
					</ContactDescription>
					<ContactDescription>
						<FontAwesomeIcon icon={faPhone} /> +82 10 6880 9725
					</ContactDescription>
					<ContactDescription>
						<FontAwesomeIcon icon={faMapMarkerAlt} /> Seoul, South Korea
					</ContactDescription>
				</ContactContainer>
				<ButtonsContainer>
					<SnsIcon href="https://github.com/Zih0" target="_blank">
						<FontAwesomeIcon icon={faGithub} />
					</SnsIcon>
					<SnsIcon href="https://instagram.com/ziho.shin" target="_blank">
						<FontAwesomeIcon icon={faInstagram} />
					</SnsIcon>
				</ButtonsContainer>
			</LeftContainer>
			<RightContainer>
				<ImgBox>
					<img src={MyImg} alt="" />
				</ImgBox>
			</RightContainer>
		</TopSectionContainer>
	);
}

export default TopSection;
