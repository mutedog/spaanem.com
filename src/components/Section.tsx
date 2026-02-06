import React from "react";
import type { ReactNode } from 'react';
import styled from "@emotion/styled";

const Info = styled.div`
  margin-bottom: 1rem;
  position: relative;

  @media (min-width: 45em) {
    margin-bottom: 3rem;

    &:has(.edu),
    &:has(.skills),
    &:has(.extras) {
      text-align: right;
    }
    &:has(.skills) {
      grid-column: 1;
      grid-row: 2/5;
    }
    &:has(.samples) {
      grid-column: 2;
      grid-row: 1/3;
    }
    &:has(.work) {
      grid-column: 2;
      grid-row: 3/8;
    }
    &:has(.extras) {
      grid-column: 1;
      grid-row: 5;
    }
	}
`;



const Section: React.FC<{children: ReactNode}> = ({children}) => {

return (
  <Info>{children}</Info>
)
}

export default Section;