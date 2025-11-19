// Exporting each individual type for each form that handles the type.
// Exporting the composition of types (CvProps) for the App.tsx .

export type PersonalInfo = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    location: string;
};

export type EducationItem = {
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
    description: string;
};

export type ExperienceItem = {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
};

export type LanguageItem = {
    language: string;
    certificate: string;
};

export type SkillItem = {
    skill: string;
};

export type CertificationItem = {
    title: string;
    issuer: string;
};

export type ProjectItem = {
    name: string;
    description: string;
    link: string;
    startDate: string;
    endDate: string;
};

export type CvProps = {
    personalInfo: PersonalInfo;
    education: EducationItem[];
    experience: ExperienceItem[];
    languages: LanguageItem[];
    skills: SkillItem[];
    certifications: CertificationItem[];
    projects: ProjectItem[];
};