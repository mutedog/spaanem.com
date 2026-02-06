import React from "react";
import styled from "@emotion/styled";
import { useAppContext } from "../context/AppContext";
import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";

const Skill = styled.div`
	margin-top: 0.125rem;
`;

const SkillList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;


const Skills: React.FC = () => {
  const { skills, loading } = useAppContext();

  if (loading) return <></>;

  return (
    <>
      {skills.length !== 0 && (
      <>
        <SectionTitle>Skills</SectionTitle>
        <SectionContent className="skills">
          <SkillList>
          {skills.map((skill, index) => (
            <Skill key={index}>
              {skill.URL && (
              <a href={skill.URL} target="_blank">{skill.Name}</a>
              )}
              {!skill.URL && (
              <span>{skill.Name}</span>
              )}
            </Skill>
          ))}
          </SkillList>
        </SectionContent>
      </>
      )}
    </>
  )
}

export default Skills;