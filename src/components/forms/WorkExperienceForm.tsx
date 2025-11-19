import type { ExperienceItem } from "../../types";

type WorkExperienceFormProps = {
    experience: ExperienceItem[];
    addExperienceItem: (item: ExperienceItem) => void;
    updateExperienceItem: (index: number, data: ExperienceItem) => void;
    removeExperienceItem: (index: number) => void;
};

const WorkExperienceForm = ({
                                experience,
                                addExperienceItem,
                                updateExperienceItem,
                                removeExperienceItem
                            }: WorkExperienceFormProps) => {

    const handleChange = (
        index: number,
        field: keyof ExperienceItem,
        value: string
    ) => {
        const updated = { ...experience[index], [field]: value };
        updateExperienceItem(index, updated);
    };

    const emptyItem: ExperienceItem = {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        description: ""
    };

    return (
        <form className="mt-3 d-flex flex-column gap-3">

            {experience.map((item, index) => (
                <div key={index} className="border rounded p-3 position-relative">

                    {/* DELETE BUTTON (only enabled if there is more than 1 item */}
                    <button
                        type="button"
                        className="btn btn-sm btn-danger position-absolute"
                        style={{ right: "10px", top: "10px" }}
                        disabled={experience.length === 1}
                        onClick={() => removeExperienceItem(index)}
                    >
                        Delete
                    </button>

                    {/* Job Title */}
                    <div>
                        <label className="form-label">Job Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Software Engineer"
                            value={item.title}
                            onChange={(e) =>
                                handleChange(index, "title", e.target.value)
                            }
                        />
                    </div>

                    {/* Company */}
                    <div>
                        <label className="form-label">Company</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Google, Microsoft..."
                            value={item.company}
                            onChange={(e) =>
                                handleChange(index, "company", e.target.value)
                            }
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="form-label">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Athens, Greece"
                            value={item.location}
                            onChange={(e) =>
                                handleChange(index, "location", e.target.value)
                            }
                        />
                    </div>

                    {/* Dates */}
                    <div className="d-flex gap-3">
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

            {/* ADD BUTTON */}
            <div className="mb-2">
                <button
                    type="button"
                    className="btn btn-outline-dark w-100"
                    onClick={() => addExperienceItem(emptyItem)}
                >
                    Add new work experience
                </button>
            </div>

        </form>
    );
};

export default WorkExperienceForm;
