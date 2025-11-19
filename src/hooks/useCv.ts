import {useState} from "react";
import type {
    CvProps,
    PersonalInfo,
    EducationItem,
    ExperienceItem,
    LanguageItem,
    SkillItem,
    CertificationItem,
    ProjectItem
} from "../types.ts";

export function useCv() {

    //Global State
    const [CvData, setCvData] = useState<CvProps>({
        personalInfo: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            github: "",
            linkedin: "",
            location: "",
        },
        education: [],
        experience: [],
        languages: [],
        skills: [],
        certifications: [],
        projects: []
    });

    //Setters for each form ( forms with array type have three setters : add , update , remove )

    const setPersonalInfo =(updateFn:(prev: PersonalInfo) => PersonalInfo )=> {
        setCvData(prev =>({
            ...prev,
            personalInfo:updateFn(prev.personalInfo),
        }))
    }

    const addEducationItem = (item: EducationItem) => {
        setCvData(prev => ({
            ...prev,
            education: [...prev.education, item]
        }));
    };

    const updateEducationItem = (index: number, data: EducationItem) => {
        setCvData(prev => {
            const updated = [...prev.education];
            updated[index] = data;
            return { ...prev, education: updated };
        });
    };

    const removeEducationItem = (index: number) => {
        setCvData(prev => ({
            ...prev,
            education: prev.education.filter((_, i) => i !== index)
        }));
    };

    const addExperienceItem = (item: ExperienceItem) => {
        setCvData(prev => ({
            ...prev,
            experience: [...prev.experience, item]
        }));
    };

    const updateExperienceItem = (index: number, data: ExperienceItem) => {
        setCvData(prev => {
            const updated = [...prev.experience];
            updated[index] = data;
            return { ...prev, experience: updated };
        });
    };

    const removeExperienceItem = (index: number) => {
        setCvData(prev => ({
            ...prev,
            experience: prev.experience.filter((_, i) => i !== index)
        }));
    };

    const addLanguageItem = (item: LanguageItem) => {
        setCvData(prev => ({
            ...prev,
            languages: [...prev.languages, item]
        }));
    };

    const updateLanguageItem = (index: number, data: LanguageItem) => {
        setCvData(prev => {
            const updated = [...prev.languages];
            updated[index] = data;
            return { ...prev, languages: updated };
        });
    };

    const removeLanguageItem = (index: number) => {
        setCvData(prev => ({
            ...prev,
            languages: prev.languages.filter((_, i) => i !== index)
        }));
    };

    const addSkillItem = (item: SkillItem) => {
        setCvData(prev => ({
            ...prev,
            skills: [...prev.skills, item]
        }));
    };

    const updateSkillItem = (index: number, data: SkillItem) => {
        setCvData(prev => {
            const updated = [...prev.skills];
            updated[index] = data;
            return { ...prev, skills: updated };
        });
    };

    const removeSkillItem = (index: number) => {
        setCvData(prev => ({
            ...prev,
            skills: prev.skills.filter((_, i) => i !== index)
        }));
    };

    const addCertificationItem = (item: CertificationItem) => {
        setCvData(prev => ({
            ...prev,
            certifications: [...prev.certifications, item]
        }));
    };

    const updateCertificationItem = (index: number, data: CertificationItem) => {
        setCvData(prev => {
            const updated = [...prev.certifications];
            updated[index] = data;
            return { ...prev, certifications: updated };
        });
    };

    const removeCertificationItem = (index: number) => {
        setCvData(prev => ({
            ...prev,
            certifications: prev.certifications.filter((_, i) => i !== index)
        }));
    };

    const addProjectItem = (item: ProjectItem) => {
        setCvData(prev => ({
            ...prev,
            projects: [...prev.projects, item]
        }));
    };

    const updateProjectItem = (index: number, data: ProjectItem) => {
        setCvData(prev => {
            const updated = [...prev.projects];
            updated[index] = data;
            return { ...prev, projects: updated };
        });
    };

    const removeProjectItem = (index: number) => {
        setCvData(prev => ({
            ...prev,
            projects: prev.projects.filter((_, i) => i !== index)
        }));
    };

    return {
        CvData,
        setPersonalInfo,
        addEducationItem,
        updateEducationItem,
        removeEducationItem,
        addExperienceItem,
        updateExperienceItem,
        removeExperienceItem,
        addLanguageItem,
        updateLanguageItem,
        removeLanguageItem,
        addSkillItem,
        updateSkillItem,
        removeSkillItem,
        addCertificationItem,
        updateCertificationItem,
        removeCertificationItem,
        addProjectItem,
        updateProjectItem,
        removeProjectItem
    };
}
