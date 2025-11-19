import type { CertificationItem } from "../../types";

interface CertificationsPreviewProps {
    certifications: CertificationItem[];
}

const CertificationsPreview = ({ certifications }: CertificationsPreviewProps) => {

    if (certifications.length === 0) return null;

    // groups of 2
    const rows = [];
    for (let i = 0; i < certifications.length; i += 2) {
        rows.push(certifications.slice(i, i + 2));
    }

    return (
        <>
            {/* Header */}
            <h3 className="mb-2 mt-3">Certifications</h3>

            {/* Rows */}
            {rows.map((pair, rowIndex) => (
                <div className="row mb-4" key={rowIndex}>

                    {/* Column 1 */}
                    <div className="col-6 d-flex flex-column">
                        {pair[0]?.title && (
                            <p className="fw-semibold">{pair[0].title}</p>
                        )}
                        {pair[0]?.issuer && (
                            <p className="fst-italic">{pair[0].issuer}</p>
                        )}
                    </div>

                    {/* Column 2 */}
                    <div className="col-6 d-flex flex-column">
                        {pair[1]?.title && (
                            <p className="fw-semibold">{pair[1].title}</p>
                        )}
                        {pair[1]?.issuer && (
                            <p className="fst-italic">{pair[1].issuer}</p>
                        )}
                    </div>

                </div>
            ))}

        </>
    );
};

export default CertificationsPreview;
