import React from "react";
import styled from "@emotion/styled";
import { useAppContext } from "../context/AppContext";
// import { RichText } from "@graphcms/rich-text-react-renderer";
import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";

const Sample = styled.div`
  margin-bottom: 1rem;
	margin-top: 0.5rem;
`;

const TitleLink = styled.a`
  font-size: 1.2em;
  line-height: 1.4;
  font-weight: bold;
`;

const Title = styled.h3`
  font-size: 1.2em;
  line-height: 1.4;
  font-weight: bold;
`;

const Samples: React.FC = () => {
  const { samples, loading } = useAppContext();

  if (loading) return <></>;

  return (
    <>
      {samples.length !== 0 && (
      <>
        <SectionTitle>Samples</SectionTitle>
        <SectionContent className="samples">
        {samples.map((sample, index) => (
          <Sample key={index}>
            {sample.url && (
              <TitleLink href={sample.url}>{sample.title}</TitleLink>
            )}
            {!sample.url && (
              <Title>{sample.title}</Title>
            )}
            <div dangerouslySetInnerHTML={ { __html: sample.details } } />
          </Sample>
        ))}
        </SectionContent>
      </>
      )}
    </>
  )
}

export default Samples;