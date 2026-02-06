// import type { RichTextContent } from "@graphcms/rich-text-types";

export interface Skill {
  Name: string;
  URL?: string;
}

export interface Job {
  Company: string;
  JobTitle: string;
  StartDate: string;
  EndDate: string | null;
  Details: string;
}

export interface School {
  Name: string;
  Details: string;
}

export interface Sample {
  title: string;
  url?: string;
  details: string;
}

export interface Extra {
  Name: string;
  URL: string;
}

export interface AllData {
  skills: Skill[];
  schools: School[];
  jobs: Job[];
  samples: Sample[];
  extras: Extra[];
}
