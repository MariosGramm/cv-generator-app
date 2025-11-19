import type { EducationItem } from "../../types";

type EducationFormProps = {
    education: EducationItem[];
    addEducationItem: (item: EducationItem) => void;
    updateEducationItem: (index: number, data: EducationItem) => void;
    removeEducationItem: (index: number) => void;
};

const EducationForm = ({
                           education,
                           addEducationItem,
                           updateEducationItem,
                           removeEducationItem
                       }: EducationFormProps) => {

    const handleChange = (
        index: number,
        field: keyof EducationItem,
        value: string
    ) => {
        const updatedItem = {
            ...education[index],
            [field]: value
        };
        updateEducationItem(index, updatedItem);
    };

    const emptyEducation: EducationItem = {
        institution: "",
        degree: "",
        startDate: "",
        endDate: "",
        description: ""
    };

    return (
        <div className="d-flex flex-column gap-4">

            {education.map((item, index) => (
                <div key={index} className="border rounded p-3 position-relative">

                    {/* DELETE BUTTON (only enabled if there is more than 1 item */}
                    <button
                        className="btn btn-sm btn-danger position-absolute"
                        style={{ right: "10px", top: "10px" }}
                        disabled={education.length === 1}
                        onClick={() => removeEducationItem(index)}
                    >
                        Delete
                    </button>

                    {/* Institution */}
                    <div className="mb-2">
                        <label className="form-label">Institution</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="University of Example"
                            value={item.institution}
                            onChange={(e) =>
                                handleChange(index, "institution", e.target.value)
                            }
                        />
                    </div>

                    {/* Degree */}
                    <div className="mb-2">
                        <label className="form-label">Degree</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Bachelor's degree"
                            value={item.degree}
                            onChange={(e) =>
                                handleChange(index, "degree", e.target.value)
                            }
                        />
                    </div>

                    {/* Start Date */}
                    <div className="mb-2">
                        <label className="form-label">Start Date - </label>
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
                    <div className="mb-2">
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

                    {/* Description */}
                    <div className="mb-2">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            placeholder="Description"
                            value={item.description}
                            onChange={(e) =>
                                handleChange(index, "description", e.target.value)
                            }
                        />
                    </div>

                </div>
            ))}

            {/* ADD EDUCATION BUTTON */}
            <button
                className="btn btn-outline-dark"
                onClick={() => addEducationItem(emptyEducation)}
            >
                Add new education
            </button>

        </div>
    );
};

export default EducationForm;
