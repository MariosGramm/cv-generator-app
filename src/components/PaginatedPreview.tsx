import type {CvProps} from "../types.ts";
import PersonalInfoPreview from "./previewSections/PersonalInfoPreview.tsx";
import EducationPreview from "./previewSections/EducationPreview.tsx";
import WorkExperiencePreview from "./previewSections/WorkExperiencePreview.tsx";
import LanguagesPreview from "./previewSections/LanguagesPreview.tsx";
import SkillsPreview from "./previewSections/SkillsPreview.tsx";
import CertificationsPreview from "./previewSections/CertificationsPreview.tsx";
import ProjectsPreview from "./previewSections/ProjectsPreview.tsx";

type PaginatedPreviewProps = {
    cvData: CvProps;
};

const PaginatedPreview = ({ cvData }: PaginatedPreviewProps) => {
    return (
        <>
            {/* ---------- PAGE 1 ---------- */}
            <div className="page position-relative">
                <PersonalInfoPreview personalInfo={cvData.personalInfo} />
                <EducationPreview education={cvData.education} />
                <WorkExperiencePreview experience={cvData.experience} />

                {/* Page number */}
                <div className="page-number">Page 1 / 3</div>
            </div>

            {/* ---------- PAGE 2 ---------- */}
            <div className="page position-relative">
                <LanguagesPreview languages={cvData.languages} />
                <SkillsPreview skills={cvData.skills} />
                <CertificationsPreview certifications={cvData.certifications} />

                {/* Page number */}
                <div className="page-number">Page 2 / 3</div>
            </div>

            {/* ---------- PAGE 3 ---------- */}
            <div className="page position-relative">
                <ProjectsPreview projects={cvData.projects} />

                {/* Page number */}
                <div className="page-number">Page 3 / 3</div>
            </div>
        </>
    );
};

export default PaginatedPreview;
