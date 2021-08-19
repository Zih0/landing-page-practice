import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

interface INavItemProps {
	mode?: "mobile" | "web";
	text: string;
	clickEvent?: (e: any) => void;
}

const Item = styled.li<{ mobile?: any }>`
	${tw`
        text-base
        md:text-xl
        text-black
        font-medium
		md:font-bold
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `};

	${({ mobile }) =>
		mobile &&
		css`
			${tw`
			text-white
			text-xl
			mb-3
    `};
		`};
`;

function NavItem({ mode, text, clickEvent }: INavItemProps) {
	if (mode === "mobile")
		return (
			<Item mobile onClick={clickEvent}>
				{text}
			</Item>
		);
	return <Item onClick={clickEvent}>{text}</Item>;
}

export default NavItem;
