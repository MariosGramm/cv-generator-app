import type { SkillItem } from "../../types";

interface SkillsPreviewProps {
    skills: SkillItem[];
}

const SkillsPreview = ({ skills }: SkillsPreviewProps) => {

    if (skills.length === 0) return null;

    //groups of 2
    const rows = [];
    for (let i = 0; i < skills.length; i += 2) {
        rows.push(skills.slice(i, i + 2));
    }

    return (
        <>
            {/* Header */}
            <h3 className="mb-2 mt-3">Skills</h3>

            {/* Render rows */}
            {rows.map((pair, rowIndex) => (
                <div className="row mb-4" key={rowIndex}>

                    {/* Column 1 */}
                    <div className="col-6 d-flex flex-column">
                        {pair[0]?.skill && <p>{pair[0].skill}</p>}
                    </div>

                    {/* Column 2 */}
                    <div className="col-6 d-flex flex-column">
                        {pair[1]?.skill && <p>{pair[1].skill}</p>}
                    </div>

                </div>
            ))}
        </>
    );
};

export default SkillsPreview;
