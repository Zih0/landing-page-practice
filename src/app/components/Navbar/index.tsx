import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../Logo";
import NavItems from "./NavItems";

interface NavProps {
	onHomeClick: (e: any) => void;
	onProjectsClick: (e: any) => void;
	onContactClick: (e: any) => void;
	onAboutClick: (e: any) => void;
}

const NavbarContainer = styled.div`
	min-height: 68px;
	${tw`
        w-full
        max-w-screen-2xl
        flex
        items-center
        lg:pl-12
        lg:pr-12
        justify-between
    `}
`;

const LogoContainer = styled.div``;

function Navbar({ onHomeClick, onProjectsClick, onContactClick, onAboutClick }: NavProps) {
	return (
		<NavbarContainer>
			<LogoContainer>
				<Logo />
			</LogoContainer>
			<NavItems
				onProjectsClick={onProjectsClick}
				onHomeClick={onHomeClick}
				onContactClick={onContactClick}
				onAboutClick={onAboutClick}
			/>
		</NavbarContainer>
	);
}

export default Navbar;
