import SideItem from "./SideItem.tsx";
import EducationForm from "./forms/EducationForm.tsx";
import PersonalInformationForm from "./forms/PersonalInformationForm.tsx";
import WorkExperienceForm from "./forms/WorkExperienceForm.tsx";
import LanguagesForm from "./forms/LanguagesForm.tsx";
import SkillsForm from "./forms/SkillsForm.tsx";
import CertificationsForm from "./forms/CertificationsForm.tsx";
import ProjectsForm from "./forms/ProjectsForm.tsx";
import type {
    CvProps,
    PersonalInfo,
    EducationItem,
    ExperienceItem,
    LanguageItem,
    SkillItem,
    CertificationItem,
    ProjectItem
} from "../types";

type SidebarProps = {
    cvData: CvProps;

    setPersonalInfo: (fn: (prev: PersonalInfo) => PersonalInfo) => void;

    addEducationItem: (item: EducationItem) => void;
    updateEducationItem: (index: number, data: EducationItem) => void;
    removeEducationItem: (index: number) => void;

    addExperienceItem: (item: ExperienceItem) => void;
    updateExperienceItem: (index: number, data: ExperienceItem) => void;
    removeExperienceItem: (index: number) => void;

    addLanguageItem: (item: LanguageItem) => void;
    updateLanguageItem: (index: number, data: LanguageItem) => void;
    removeLanguageItem: (index: number) => void;

    addSkillItem: (item: SkillItem) => void;
    updateSkillItem: (index: number, data: SkillItem) => void;
    removeSkillItem: (index: number) => void;

    addCertificationItem: (item: CertificationItem) => void;
    updateCertificationItem: (index: number, data: CertificationItem) => void;
    removeCertificationItem: (index: number) => void;

    addProjectItem: (item: ProjectItem) => void;
    updateProjectItem: (index: number, data: ProjectItem) => void;
    removeProjectItem: (index: number) => void;
};


const Sidebar = ({cvData,
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
                 removeProjectItem} : SidebarProps) => {
    return (
        <>
            {/*Left sidebar*/}
            <div className = "d-flex flex-column ms-4 mt-3 gap-3 w-75">

                {/*Personal Information Section*/}
                <SideItem title="Personal Information" icon="bi-person-fill">
                    <PersonalInformationForm
                        personalInfo={cvData.personalInfo}
                        setPersonalInfo={setPersonalInfo}
                    />
                </SideItem>

                {/*Education Section*/}
                <SideItem title="Education" icon="bi-mortarboard-fill">
                    <EducationForm
                        education={cvData.education}
                        addEducationItem={addEducationItem}
                        updateEducationItem={updateEducationItem}
                        removeEducationItem={removeEducationItem}
                    />
                </SideItem>

                {/*Work Experience Section*/}
                <SideItem title="Work Experience" icon="bi-suitcase-lg-fill">
                    <WorkExperienceForm
                        experience={cvData.experience}
                        addExperienceItem={addExperienceItem}
                        updateExperienceItem={updateExperienceItem}
                        removeExperienceItem={removeExperienceItem}
                    />
                </SideItem>

                {/*Languages Section*/}
                <SideItem title="Languages" icon="bi-globe-americas-fill">
                    <LanguagesForm
                        languages={cvData.languages}
                        addLanguageItem={addLanguageItem}
                        updateLanguageItem={updateLanguageItem}
                        removeLanguageItem={removeLanguageItem}
                    />
                </SideItem>

                {/*Skills Section*/}
                <SideItem title="Skills" icon="bi-lightbulb-fill">
                    <SkillsForm
                        skills={cvData.skills}
                        addSkillItem={addSkillItem}
                        updateSkillItem={updateSkillItem}
                        removeSkillItem={removeSkillItem}
                    />
                </SideItem>

                {/*Certifications Section*/}
                <SideItem title="Certifications" icon="bi-file-text-fill">
                    <CertificationsForm
                        certifications={cvData.certifications}
                        addCertificationItem={addCertificationItem}
                        updateCertificationItem={updateCertificationItem}
                        removeCertificationItem={removeCertificationItem}
                    />
                </SideItem>

                {/*Projects Section*/}
                <SideItem title="Projects" icon="bi-folder-fill">
                    <ProjectsForm
                        projects={cvData.projects}
                        addProjectItem={addProjectItem}
                        updateProjectItem={updateProjectItem}
                        removeProjectItem={removeProjectItem}
                    />
                </SideItem>
            </div>
        </>
    )
}

export default Sidebar;