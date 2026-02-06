import React from "react";
import type { ReactNode } from 'react';
import styled from "@emotion/styled";

const Content = styled.div`
	max-height: 0;
	transition: max-height 0.5s;
	overflow: hidden;

	.is-open + & {
    &.edu {
			max-height: 13rem;
		}
		&.skills {
			max-height: 26rem;
		}
		&.work {
			max-height: 133rem;
		}
		&.samples {
			max-height: 45rem;
		}
    &.extras {
    	max-height: 13rem;
    }
	}

	@media (min-width: 45em) {
		max-height: none;
    .is-open + & {
      &.edu, &.skills, &.work,	&.samples, &.extras {
        max-height: none;
      }
	  }
    &.edu, &.skills, &.extras {
      text-align: right;
    }
	}
`;

interface SectionContentProps {
  children: ReactNode;
  className?: 'edu'|'skills'|'work'|'samples'|'extras';
}


const SectionContent: React.FC<SectionContentProps> = ({children, className}) => {

return (
  <Content className={className}>{children}</Content>
)
}

export default SectionContent;