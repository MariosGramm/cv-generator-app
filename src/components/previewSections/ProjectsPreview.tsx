import type { ProjectItem } from "../../types";

interface ProjectsPreviewProps {
    projects: ProjectItem[];
}

const ProjectsPreview = ({ projects }: ProjectsPreviewProps) => {

    if (projects.length === 0) return null;

    return (
        <>
            {/* Header */}
            <h3 className="mb-2">Projects</h3>

            {/* Content */}
            <div>
                {projects.map((item, index) => (
                    <div className="row mb-4" key={index}>

                        {/* LEFT COLUMN — Start & End Dates */}
                        <div className="col-3 d-flex flex-column">
                            {item.startDate && <p>{item.startDate} -</p>}
                            {item.endDate && <p>{item.endDate}</p>}
                        </div>

                        {/* RIGHT COLUMN — Title (clickable) + Description */}
                        <div className="col-5 d-flex flex-column">

                            {/* Title (clickable ONLY if link exists) */}
                            {item.name && (
                                item.link ? (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="fw-semibold text-decoration-none"
                                        style={{ color: "black" }}
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <p className="fw-semibold">{item.name}</p>
                                )
                            )}

                            {/* Description */}
                            {item.description && <p>{item.description}</p>}
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
};

export default ProjectsPreview;
