import { gql } from 'graphql-request';

const GET_CONTENT = gql`
  {
    samples {
      title
      url
      details
    }
    jobs {
      Company
      JobTitle
      StartDate
      EndDate
      Details
    }
    schools {
      Name
      Details
    }
    skills {
      Name
      URL
    }
    extras {
      Name
      URL
    }
  }
`;

export default GET_CONTENT;

// http://localhost:8080/?query={samples{title%20url%20details}jobs{Company%20JobTitle%20StartDate%20EndDate%20Details}schools{Name%20Details}skills{Name%20URL}extras{Name%20URL}}