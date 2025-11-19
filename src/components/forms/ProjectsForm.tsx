import type { ProjectItem } from "../../types";

type ProjectsFormProps = {
    projects: ProjectItem[];
    addProjectItem: (item: ProjectItem) => void;
    updateProjectItem: (index: number, data: ProjectItem) => void;
    removeProjectItem: (index: number) => void;
};

const ProjectsForm = ({
                          projects,
                          addProjectItem,
                          updateProjectItem,
                          removeProjectItem
                      }: ProjectsFormProps) => {

    const handleChange = (
        index: number,
        field: keyof ProjectItem,
        value: string
    ) => {
        const updated = { ...projects[index], [field]: value };
        updateProjectItem(index, updated);
    };

    const emptyItem: ProjectItem = {
        name: "",
        description: "",
        link: "",
        startDate: "",
        endDate: "",
    };

    return (
        <form className="mt-3 d-flex flex-column gap-3">

            {projects.map((item, index) => (
                <div key={index} className="border rounded p-3 position-relative">

                    {/* DELETE ALWAYS ALLOWED */}
                    <button
                        type="button"
                        className="btn btn-sm btn-danger position-absolute"
                        style={{ right: "10px", top: "10px" }}
                        onClick={() => removeProjectItem(index)}
                    >
                        Delete
                    </button>

                    {/* Project Title */}
                    <div>
                        <label className="form-label">Project Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="My Portfolio Project"
                            value={item.name}
                            onChange={(e) =>
                                handleChange(index, "name", e.target.value)
                            }
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            rows={3}
                            placeholder="Short description..."
                            value={item.description}
                            onChange={(e) =>
                                handleChange(index, "description", e.target.value)
                            }
                        />
                    </div>

                    {/* LINK */}
                    <div>
                        <label className="form-label">Project Link</label>
                        <input
                            type="url"
                            className="form-control"
                            placeholder="https://github.com/..."
                            value={item.link}
                            onChange={(e) =>
                                handleChange(index, "link", e.target.value)
                            }
                        />
                    </div>

                    {/* Start & End Dates */}
                    <div className="d-flex gap-3 mt-2">

                        {/* Start Date */}
                        <div className="flex-fill">
                            <label className="form-label">Start Date </label>
                            <input
                                type="month"
                                className="form-control"
                                value={item.startDate}
                                onChange={(e) =>
                                    handleChange(index, "startDate", e.target.value)
                                }
                            />
                        </div>

                        {/* End Date */}
                        <div className="flex-fill">
                            <label className="form-label">End Date</label>
                            <input
                                type="month"
                                className="form-control"
                                value={item.endDate}
                                onChange={(e) =>
                                    handleChange(index, "endDate", e.target.value)
                                }
                            />
                        </div>

                    </div>

                </div>
            ))}

            {/* ADD PROJECT */}
            <div className="mb-2">
                <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() => addProjectItem(emptyItem)}
                >
                    Add new project
                </button>
            </div>

        </form>
    );
};

export default ProjectsForm;
