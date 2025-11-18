const CertificationsForm = () => {
    return (
        <form className="mt-3 d-flex flex-column gap-3">

            <div>
                <label className="form-label">Certification Title</label>
                <input type="text" className="form-control" placeholder="AWS Cloud Practitioner" />
            </div>

            <div>
                <label className="form-label">Organization</label>
                <input type="text" className="form-control" placeholder="Amazon, Google..." />
            </div>

            {/*Add certification button*/}
            <div className="mb-2">
                <button className="btn btn-outline-dark">Add new certification</button>
            </div>

        </form>
    );
};

export default CertificationsForm;
