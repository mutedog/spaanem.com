import React from "react";
import styled from "@emotion/styled";
import { useAppContext } from "../context/AppContext";
// import { RichText } from "@graphcms/rich-text-react-renderer";
import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";
// import extractPlainTextFromRichText from "../lib/RichtextToPlainText";
import copyText from "../lib/Copy";


const Job = styled.div`
  margin-bottom: 1rem;
	margin-top: 0.5rem;
`;

const Company = styled.h3`
  font-size: 1.2em;
  line-height: 1.4;
  float: left;
`;

const Dates = styled.time`
  float: right;
  // pointer-events: none;
`;

const JobTitle = styled.div`
  clear: both;
  font-style: italic;
`;



const Jobs: React.FC = () => {
  const { jobs, loading, copy } = useAppContext();

  if (loading) return <></>;

  return (
    <>
      {jobs.length !== 0 && (
      <>
        <SectionTitle>Work</SectionTitle>
        <SectionContent className="work">
        {jobs.map((job, index) => {
          const startDate = new Date(job.StartDate);
          const endDate = job.EndDate !== null ? new Date(job.EndDate) : null;
          const copyStartDate = startDate.toLocaleDateString('en-US', {timeZone: 'UTC'});
          const copyEndDate = endDate !== null ? endDate.toLocaleDateString('en-US', {timeZone: 'UTC'}) : "";
          return (
          <Job key={index}>
            <Company onClick={async () => {await copyText(copy ? job.Company : '');}}>{job.Company}</Company>
            <Dates dateTime="">
              <span onClick={async () => {await copyText(copy ? copyStartDate : '');}}>{startDate.getFullYear()}</span> - 
              <span onClick={async () => {await copyText(copy ? copyEndDate : '');}}>{endDate ? endDate.getFullYear() : 'Present'}</span></Dates>
            <JobTitle onClick={async () => {await copyText(copy ? job.JobTitle : '');}}>{job.JobTitle}</JobTitle>
            <div onClick={async () => {await copyText(copy ? job.Details : '');}}>
              {job.Details}
            </div>
          </Job>
        )})}
        </SectionContent>
      </>
      )}
    </>
  )
}

export default Jobs;