import type { PersonalInfo } from "../../types";

interface PersonalInfoPreviewProps {
    personalInfo: PersonalInfo;
}

const PersonalInfoPreview = ({ personalInfo }: PersonalInfoPreviewProps) => {
    return (
        <>
            {/* Full Name */}
            <h1 className="text-center">
                {personalInfo.firstName} {personalInfo.lastName}
            </h1>

            <div className="row mt-3">

                {/* Left column */}
                <div className="col-6 d-flex flex-column gap-2">

                    {/* Email */}
                    {personalInfo.email && (
                        <div className="d-flex align-items-center gap-2">
                            <i className="bi bi-envelope"></i>
                            <span>{personalInfo.email}</span>
                        </div>
                    )}

                    {/* Location */}
                    {personalInfo.location && (
                        <div className="d-flex align-items-center gap-2">
                            <i className="bi bi-geo-alt"></i>
                            <span>{personalInfo.location}</span>
                        </div>
                    )}

                    {/* GitHub */}
                    {personalInfo.github && (
                        <div className="d-flex align-items-center gap-2">
                            <i className="bi bi-github"></i>
                            <span>{personalInfo.github}</span>
                        </div>
                    )}
                </div>

                {/* Right Column */}
                <div className="col-6 d-flex flex-column gap-2">

                    {/* Phone */}
                    {personalInfo.phone && (
                        <div className="d-flex align-items-center gap-2">
                            <i className="bi bi-telephone"></i>
                            <span>{personalInfo.phone}</span>
                        </div>
                    )}

                    {/* LinkedIn */}
                    {personalInfo.linkedin && (
                        <div className="d-flex align-items-center gap-2">
                            <i className="bi bi-linkedin"></i>
                            <span>{personalInfo.linkedin}</span>
                        </div>
                    )}

                </div>

            </div>

        </>
    );
};

export default PersonalInfoPreview;
