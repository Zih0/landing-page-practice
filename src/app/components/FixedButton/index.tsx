import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IFixedButtonProps {
	onHomeClick: (e: any) => void;
}

const FixedButtonCantainer = styled.div`
	${tw`
        fixed
        right-10
        bottom-5
    `}
`;

const TopButton = styled.span`
	color: black;
	cursor: pointer;
	font-size: 2rem;
	font-weight: 800;
`;

function FixedButton({ onHomeClick }: IFixedButtonProps) {
	return (
		<FixedButtonCantainer>
			<TopButton onClick={onHomeClick}>
				TOP
				<FontAwesomeIcon icon={faChevronUp} size="1x" />
			</TopButton>
		</FixedButtonCantainer>
	);
}

export default FixedButton;
