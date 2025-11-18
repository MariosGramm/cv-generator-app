import PersonalInfoPreview from "./previewSections/PersonalInfoPreview.tsx";
import EducationPreview from "./previewSections/EducationPreview.tsx";
import WorkExperiencePreview from "./previewSections/WorkExperiencePreview.tsx";
import LanguagesPreview from "./previewSections/LanguagesPreview.tsx";
import SkillsPreview from "./previewSections/SkillsPreview.tsx";
import CertificationsPreview from "./previewSections/CertificationsPreview.tsx";
import ProjectsPreview from "./previewSections/ProjectsPreview.tsx";

const Preview = () => {
    return (
        <>
            <div className="bg-white rounded-3 shadow-lg w-75 p-4 mt-3 h-auto overflow-auto">
                <PersonalInfoPreview></PersonalInfoPreview>
                <EducationPreview></EducationPreview>
                <WorkExperiencePreview></WorkExperiencePreview>
                <LanguagesPreview></LanguagesPreview>
                <SkillsPreview></SkillsPreview>
                <CertificationsPreview></CertificationsPreview>
                <ProjectsPreview></ProjectsPreview>
            </div>
        </>
    );
};

export default Preview;


