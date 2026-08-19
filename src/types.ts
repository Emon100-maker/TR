export interface EducationItem {
  id: string;
  level: 'BSC' | 'HSC' | 'SSC' | 'OTHER';
  degree: string;
  institution: string;
  boardOrUniversity: string;
  gpa: string;
  maxGpa: string;
  year: string;
  period?: string;
  groupOrMajor: string;
  description: string;
  achievements: string[];
  iconType?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'technical' | 'academic' | 'soft' | 'languages' | 'tools' | 'core';
  level: number; // 1-100
  experienceYears: string;
  iconName: string;
  featured?: boolean;
  tagline?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-Time' | 'Part-Time' | 'Teaching' | 'Internship' | 'Contract' | 'Remote';
  description: string[];
  technologies: string[];
  current?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: 'engineering' | 'python' | 'web' | 'gis' | 'all';
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  image?: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone?: string;
  location: string;
  website?: string;
  twitter?: string;
}

export interface ReferenceItem {
  id: string;
  name: string;
  designation: string;
  department: string;
  institution: string;
  email?: string;
  phone?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  description?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  roles: string[];
  bio: string;
  careerObjective: string;
  shortBio: string;
  profilePicUrl: string;
  cvPdfUrl: string;
  availableForHire: boolean;
  socials: SocialLinks;
  education: EducationItem[];
  skills: SkillItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  researchInterests: string[];
  certifications: CertificationItem[];
  achievements: string[];
  references: ReferenceItem[];
}

