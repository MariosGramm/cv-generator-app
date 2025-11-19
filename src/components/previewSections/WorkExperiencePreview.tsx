import type { ExperienceItem } from "../../types";

interface WorkExperiencePreviewProps {
    experience: ExperienceItem[];
}

const WorkExperiencePreview = ({ experience }: WorkExperiencePreviewProps) => {


    if (experience.length === 0) return null;

    return (
        <>
            {/* Header */}
            <h3 className="mb-2">Work Experience</h3>

            {/* Content */}
            <div>
                {experience.map((item, index) => (
                    <div className="row mb-4" key={index}>

                        {/* Column 1: Start Date - End Date */}
                        <div className="col-3 d-flex flex-column">
                            {item.startDate && <p>{item.startDate}</p>}
                            {item.endDate && <p>{item.endDate}</p>}
                        </div>

                        {/* Column 2: Job Title - Company - Description */}
                        <div className="col-5 d-flex flex-column">
                            {item.title && (
                                <p className="fw-semibold">{item.title}</p>
                            )}
                            {item.company && (
                                <p className="fst-italic">{item.company}</p>
                            )}
                            {item.description && <p>{item.description}</p>}
                        </div>

                        {/* Column 3: Location */}
                        <div className="col-3 d-flex flex-column">
                            {item.location && <p>{item.location}</p>}
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
};

export default WorkExperiencePreview;
