import type { EducationItem } from "../../types";

interface EducationPreviewProps {
    education: EducationItem[];
}

const EducationPreview = ({ education }: EducationPreviewProps) => {

    // Αν δεν υπάρχει ούτε ένα entry → μην εμφανίσεις καθόλου την ενότητα
    if (education.length === 0) return null;

    return (
        <>
            {/* Header */}
            <h3 className="mb-2 mt-3">Education</h3>

            {/* Content */}
            <div>
                {education.map((item, index) => (
                    <div className="row mb-4" key={index}>

                        {/* Column 1: Start Date - End Date */}
                        <div className="col-3 d-flex flex-column">
                            {item.startDate && <p>{item.startDate} -</p>}
                            {item.endDate && <p>{item.endDate}</p>}
                        </div>

                        {/* Column 2: Degree - Institution - Description */}
                        <div className="col-5 d-flex flex-column">
                            {item.degree && (
                                <p className="fw-semibold">{item.degree}</p>
                            )}
                            {item.institution && (
                                <p className="fst-italic">{item.institution}</p>
                            )}
                            {item.description && <p>{item.description}</p>}
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
};

export default EducationPreview;
