import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
// import { hygraph } from '../lib/hygraph';
import { graphql } from '../lib/graphql';
import GET_CONTENT from '../lib/getContent';
import type { Skill, School, Job, Sample, Extra, AllData } from '../types';


interface AppContextType {
  skills: Skill[];
  schools: School[];
  jobs: Job[];
  samples: Sample[];
  extras: Extra[];
  loading: boolean;
  error: string | null;
  copy: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [schools, setSchools] = useState<School[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [samples, setSamples] = useState<Sample[]>([]);
  const [extras, setExtras] = useState<Extra[]>([]);
  const [copy, setCopy] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await graphql.request<AllData>(GET_CONTENT);
        console.log('data: ',data);
        setSchools(data.schools);
        setJobs(data.jobs);
        setSkills(data.skills);
        setSamples(data.samples);
        setExtras(data.extras);
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError((err as Error).message || 'Failed to fetch posts')
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const params = new URLSearchParams(window.location.search);
    if (params.has('copy')) {
      setCopy(true);
    }
  }, []);

  return (
    <AppContext.Provider value={{samples, schools, jobs, skills, extras, loading, error, copy}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext)
  if(!context) {
    throw new Error ('useAppContext must be used within AppProvider');
  }
  return context;
};

