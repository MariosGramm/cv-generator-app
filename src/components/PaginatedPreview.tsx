import type {CvProps} from "../types.ts";
import PersonalInfoPreview from "./previewSections/PersonalInfoPreview.tsx";
import EducationPreview from "./previewSections/EducationPreview.tsx";
import WorkExperiencePreview from "./previewSections/WorkExperiencePreview.tsx";
import LanguagesPreview from "./previewSections/LanguagesPreview.tsx";
import SkillsPreview from "./previewSections/SkillsPreview.tsx";
import CertificationsPreview from "./previewSections/CertificationsPreview.tsx";
import ProjectsPreview from "./previewSections/ProjectsPreview.tsx";
import {forwardRef} from "react";

type PaginatedPreviewProps = {
    cvData: CvProps,
};

const PaginatedPreview = forwardRef<HTMLDivElement,PaginatedPreviewProps>(({cvData}: PaginatedPreviewProps,ref) => {
    return (
            <div ref={ref} id="cv-preview" className="d-flex flex-column ms-4 mt-3 gap-3 w-75 paginated-container">
                {/* ---------- PAGE 1 ---------- */}
                <div className="page position-relative">
                    <PersonalInfoPreview personalInfo={cvData.personalInfo}/>
                    <EducationPreview education={cvData.education}/>
                    <WorkExperiencePreview experience={cvData.experience}/>

                    {/* Page number */}
                    <div className="page-number">Page 1 / 3</div>
                </div>

                {/* ---------- PAGE 2 ---------- */}
                <div className="page position-relative">
                    <LanguagesPreview languages={cvData.languages}/>
                    <SkillsPreview skills={cvData.skills}/>
                    <CertificationsPreview certifications={cvData.certifications}/>

                    {/* Page number */}
                    <div className="page-number">Page 2 / 3</div>
                </div>

                {/* ---------- PAGE 3 ---------- */}
                <div className="page position-relative">
                    <ProjectsPreview projects={cvData.projects}/>

                    {/* Page number */}
                    <div className="page-number">Page 3 / 3</div>
                </div>
            </div>
    );
});

export default PaginatedPreview;
