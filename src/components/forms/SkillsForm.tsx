import type { SkillItem } from "../../types";

type SkillsFormProps = {
    skills: SkillItem[];
    addSkillItem: (item: SkillItem) => void;
    updateSkillItem: (index: number, data: SkillItem) => void;
    removeSkillItem: (index: number) => void;
};

const SkillsForm = ({
                        skills,
                        addSkillItem,
                        updateSkillItem,
                        removeSkillItem
                    }: SkillsFormProps) => {

    const handleChange = (
        index: number,
        field: keyof SkillItem,
        value: string
    ) => {
        const updated = { ...skills[index], [field]: value };
        updateSkillItem(index, updated);
    };

    const emptyItem: SkillItem = {
        skill: ""
    };

    return (
        <form className="mt-3 d-flex flex-column gap-3">

            {skills.map((item, index) => (
                <div key={index} className="border rounded p-3 position-relative">

                    {/* DELETE - disabled if only 1 */}
                    <button
                        type="button"
                        className="btn btn-sm btn-danger position-absolute"
                        style={{ right: "10px", top: "10px" }}
                        disabled={skills.length === 1}
                        onClick={() => removeSkillItem(index)}
                    >
                        Delete
                    </button>

                    {/* Skill Name */}
                    <div>
                        <label className="form-label">Skill</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="JavaScript, React..."
                            value={item.skill}
                            onChange={(e) =>
                                handleChange(index, "skill", e.target.value)
                            }
                        />
                    </div>

                </div>
            ))}

            {/* Add new skill */}
            <div className="mb-2">
                <button
                    type="button"
                    className="btn btn-outline-dark w-100"
                    onClick={() => addSkillItem(emptyItem)}
                >
                    Add new skill
                </button>
            </div>

        </form>
    );
};

export default SkillsForm;
