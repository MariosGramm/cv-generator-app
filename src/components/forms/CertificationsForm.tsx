import type { CertificationItem } from "../../types";

type CertificationsFormProps = {
    certifications: CertificationItem[];
    addCertificationItem: (item: CertificationItem) => void;
    updateCertificationItem: (index: number, data: CertificationItem) => void;
    removeCertificationItem: (index: number) => void;
};

const CertificationsForm = ({
                                certifications,
                                addCertificationItem,
                                updateCertificationItem,
                                removeCertificationItem
                            }: CertificationsFormProps) => {

    const handleChange = (
        index: number,
        field: keyof CertificationItem,
        value: string
    ) => {
        const updated = { ...certifications[index], [field]: value };
        updateCertificationItem(index, updated);
    };

    const emptyItem: CertificationItem = {
        title: "",
        issuer: ""
    };

    return (
        <form className="mt-3 d-flex flex-column gap-3">

            {certifications.map((item, index) => (
                <div key={index} className="border rounded p-3 position-relative">

                    {/* DELETE ALWAYS ALLOWED */}
                    <button
                        type="button"
                        className="btn btn-sm btn-danger position-absolute"
                        style={{ right: "10px", top: "10px" }}
                        onClick={() => removeCertificationItem(index)}
                    >
                        Delete
                    </button>

                    {/* Title */}
                    <div className="mb-2">
                        <label className="form-label">Certification Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="AWS Cloud Practitioner"
                            value={item.title}
                            onChange={(e) =>
                                handleChange(index, "title", e.target.value)
                            }
                        />
                    </div>

                    {/* Issuer */}
                    <div className="mb-2">
                        <label className="form-label">Organization</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Amazon, Google..."
                            value={item.issuer}
                            onChange={(e) =>
                                handleChange(index, "issuer", e.target.value)
                            }
                        />
                    </div>

                </div>
            ))}

            {/* ADD BUTTON */}
            <div className="mb-2">
                <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() => addCertificationItem(emptyItem)}
                >
                    Add new certification
                </button>
            </div>

        </form>
    );
};

export default CertificationsForm;
