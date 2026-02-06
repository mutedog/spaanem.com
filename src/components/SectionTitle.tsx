import React, { useState } from "react";
import type { ReactNode } from 'react';
import styled from "@emotion/styled";

const Title = styled.h2`
  position: relative;
  
  &:before, &:after {
		content: "";
		display: block;
		position: absolute;
		width: 1rem;
		height: .25rem;
		background-color: var(--black);
	}
	&:before {
		top: calc(50% - .125rem);
		right: 0;
	}
	&:after {
		transform-origin: center;
		transform: rotate(270deg);
		top: calc(50% - .125rem);
		right: 0;
		transition: transform .25s ease-in-out;
	}
	&.is-open:after {
		transform: rotate(0deg);
	}

  @media (min-width: 45em) {  
		&:before, &:after {
			display: none;
		}
	}
`;



const SectionTitle: React.FC<{children: ReactNode}> = ({children}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Title className={open ? 'is-open' : ''} onClick={() => setOpen(!open)}>{children}</Title>
  )
}

export default SectionTitle;
