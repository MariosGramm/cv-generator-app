import type { LanguageItem } from "../../types";

type LanguagesFormProps = {
    languages: LanguageItem[];
    addLanguageItem: (item: LanguageItem) => void;
    updateLanguageItem: (index: number, data: LanguageItem) => void;
    removeLanguageItem: (index: number) => void;
};

const LanguagesForm = ({
                           languages,
                           addLanguageItem,
                           updateLanguageItem,
                           removeLanguageItem
                       }: LanguagesFormProps) => {

    const handleChange = (
        index: number,
        field: keyof LanguageItem,
        value: string
    ) => {
        const updated = { ...languages[index], [field]: value };
        updateLanguageItem(index, updated);
    };

    const emptyItem: LanguageItem = {
        language: "",
        certificate: ""
    };

    return (
        <form className="mt-3 d-flex flex-column gap-3">

            {languages.map((item, index) => (
                <div key={index} className="border rounded p-3 position-relative">

                    {/* DELETE BUTTON */}
                    <button
                        type="button"
                        className="btn btn-sm btn-danger position-absolute"
                        style={{ right: "10px", top: "10px" }}
                        disabled={languages.length === 1}   // <= cannot delete last
                        onClick={() => removeLanguageItem(index)}
                    >
                        Delete
                    </button>

                    {/* Language */}
                    <div>
                        <label className="form-label">Language</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="English, French..."
                            value={item.language}
                            onChange={(e) =>
                                handleChange(index, "language", e.target.value)
                            }
                        />
                    </div>

                    {/* Certificate */}
                    <div>
                        <label className="form-label">Certificate</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Michigan Proficiency Certificate"
                            value={item.certificate}
                            onChange={(e) =>
                                handleChange(index, "certificate", e.target.value)
                            }
                        />
                    </div>

                </div>
            ))}

            {/* ADD LANGUAGE BUTTON */}
            <div className="mb-2">
                <button
                    type="button"
                    className="btn btn-outline-dark w-100"
                    onClick={() => addLanguageItem(emptyItem)}
                >
                    Add new language
                </button>
            </div>

        </form>
    );
};

export default LanguagesForm;
