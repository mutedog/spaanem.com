import React from "react";
import styled from "@emotion/styled";
import { useAppContext } from "../context/AppContext";
import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";

const School = styled.div`
  margin-bottom: 1rem;
	margin-top: 0.5rem;
`;
const Schools: React.FC = () => {
  const { schools, loading } = useAppContext();

  if (loading) return <></>;

  return (
    <>
      {schools.length !== 0 && (
      <>
        <SectionTitle>Education</SectionTitle>
        <SectionContent className="edu">
        {schools.map((school, index) => (
          <School key={index}>
            <h3>{school.Name}</h3>
            <div style={{whiteSpace: 'pre-wrap'}}>{school.Details}</div>
          </School>
        ))}
        </SectionContent>
      </>
      )}
    </>
  )
}

export default Schools;