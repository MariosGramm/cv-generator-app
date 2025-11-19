import PersonalInfoPreview from "./previewSections/PersonalInfoPreview.tsx";
import EducationPreview from "./previewSections/EducationPreview.tsx";
import WorkExperiencePreview from "./previewSections/WorkExperiencePreview.tsx";
import LanguagesPreview from "./previewSections/LanguagesPreview.tsx";
import SkillsPreview from "./previewSections/SkillsPreview.tsx";
import CertificationsPreview from "./previewSections/CertificationsPreview.tsx";
import ProjectsPreview from "./previewSections/ProjectsPreview.tsx";
import type {CvProps} from "../types.ts";

type PreviewProps = {
    cvData : CvProps;
}



const Preview = ({cvData}:PreviewProps) => {
    return (
        <>
            <div className="bg-white rounded-3 shadow-lg w-75 p-4 mt-3 h-auto overflow-auto">
                <PersonalInfoPreview personalInfo = {cvData.personalInfo}></PersonalInfoPreview>
                <EducationPreview education = {cvData.education}></EducationPreview>
                <WorkExperiencePreview experience = {cvData.experience}></WorkExperiencePreview>
                <LanguagesPreview languages={cvData.languages}></LanguagesPreview>
                <SkillsPreview skills={cvData.skills}></SkillsPreview>
                <CertificationsPreview certifications={cvData.certifications}></CertificationsPreview>
                <ProjectsPreview projects={cvData.projects}></ProjectsPreview>
            </div>
        </>
    );
};

export default Preview;


