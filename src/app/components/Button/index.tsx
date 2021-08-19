import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
	theme?: "filled" | "outlined";
	children: JSX.Element;
}

const BaseButton = styled.span`
	font-family: "Titillium Web", sans-serif;
	border: 1px solid black;
	${tw`
        pl-3
        pr-3
        pt-3
        pb-3
        outline-none
        rounded-md
        text-white
        text-xs
        font-semibold
        border-transparent
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        mr-1
        mb-1
    `}
`;

const OutlinedButton = styled(BaseButton)`
	${tw`
        bg-black
        hover:bg-transparent
        hover:text-black
        hover:border-black
    `}
`;

const FilledButton = styled(BaseButton)`
	${tw`
        border-black
        text-black
        bg-transparent
        hover:bg-black
        hover:text-white
        hover:border-transparent
    `}
`;

function Button({ theme, children }: IButtonProps) {
	if (theme === "filled") return <FilledButton>{children}</FilledButton>;
	else return <OutlinedButton>{children}</OutlinedButton>;
}

export default Button;
