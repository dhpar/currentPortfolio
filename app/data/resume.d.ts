type TTech = Array<string>;

export interface Resume {
  name: string;
  title: string;
  location: string;
  openTo: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
  summary: Array<string>;
  skills: {
    title: string;
    tech: TTech;
  }[];
  projects: {
    name: string;
    link: string;
    description: string;
    tech: TTech;
  }[];
  experience: {
    company: string;
    role: string;
    start: string;
    end: string;
    highlights: string[];
  }[];
  education: {
    degree: string;
    link: string;
    institution: string;
    graduation_year: number;
    focus: string;
  };
}
