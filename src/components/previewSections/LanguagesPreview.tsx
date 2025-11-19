import type { LanguageItem } from "../../types";

interface LanguagesPreviewProps {
    languages: LanguageItem[];
}

const LanguagesPreview = ({ languages }: LanguagesPreviewProps) => {

    if (languages.length === 0) return null;

    //groups of 2
    const rows = [];
    for (let i = 0; i < languages.length; i += 2) {
        rows.push(languages.slice(i, i + 2));
    }

    return (
        <>
            {/* Header */}
            <h3 className="mb-3">Languages</h3>

            {/* Rows */}
            {rows.map((pair, rowIndex) => (
                <div className="row mb-4" key={rowIndex}>

                    {/* First column */}
                    <div className="col-6 d-flex flex-column">
                        {pair[0]?.language && (
                            <p className="fw-semibold">{pair[0].language}</p>
                        )}
                        {pair[0]?.certificate && (
                            <p className="fst-italic">{pair[0].certificate}</p>
                        )}
                    </div>

                    {/* Second column */}
                    <div className="col-6 d-flex flex-column">
                        {pair[1]?.language && (
                            <p className="fw-semibold">{pair[1].language}</p>
                        )}
                        {pair[1]?.certificate && (
                            <p className="fst-italic">{pair[1].certificate}</p>
                        )}
                    </div>

                </div>
            ))}
        </>
    );
};

export default LanguagesPreview;
