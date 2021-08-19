import React from "react";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";
import NavItem from "./NavItem";

interface NavProps {
	onHomeClick: (e: any) => void;
	onProjectsClick: (e: any) => void;
	onContactClick: (e: any) => void;
	onAboutClick: (e: any) => void;
}

const ListContainer = styled.ul`
	display: flex;
	list-style: none;
`;

function NavItems({ onHomeClick, onProjectsClick, onContactClick, onAboutClick }: NavProps) {
	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

	if (isMobile)
		return (
			<Menu right styles={menuStyles}>
				<ListContainer>
					<NavItem mode="mobile" text="Home" clickEvent={onHomeClick} />
					<NavItem mode="mobile" text="About" clickEvent={onAboutClick} />
					<NavItem mode="mobile" text="Projects" clickEvent={onProjectsClick} />
					<NavItem mode="mobile" text="Contact" clickEvent={onContactClick} />
				</ListContainer>
			</Menu>
		);
	return (
		<ListContainer>
			<NavItem text="Home" clickEvent={onHomeClick} />
			<NavItem text="About" clickEvent={onAboutClick} />
			<NavItem text="Projects" clickEvent={onProjectsClick} />
			<NavItem text="Contact" clickEvent={onContactClick} />
		</ListContainer>
	);
}

export default NavItems;
