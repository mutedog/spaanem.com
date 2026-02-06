import React from "react";
import styled from "@emotion/styled";
import { useAppContext } from "../context/AppContext";
import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";

const Extra = styled.div`
	margin-top: 0.125rem;
`;

const ExtraList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;


const Extras: React.FC = () => {
  const { extras, loading } = useAppContext();

  if (loading) return <></>;

  return (
    <>
      {extras.length !== 0 && (
      <>
        <SectionTitle>Extras</SectionTitle>
        <SectionContent className="extras">
          <ExtraList>
          {extras.map((extra, index) => (
            <Extra key={index}>
              {extra.URL && (
              <a href={extra.URL} target="_blank">{extra.Name}</a>
              )}
              {!extra.URL && (
              <span>{extra.Name}</span>
              )}
            </Extra>
          ))}
          </ExtraList>
        </SectionContent>
      </>
      )}
    </>
  )
}

export default Extras;