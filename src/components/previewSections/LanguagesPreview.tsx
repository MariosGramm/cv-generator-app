const LanguagesPreview = () => {
    return (
        <>
            {/*Header*/}
            <h3 className="mb-3">Languages</h3>

            {/* Row */}
            <div className="row mb-4">

                {/*Column 1*/}
                <div className="col-6 d-flex flex-column">
                    <p className="fw-semibold">Language 1</p>
                    <p className="fst-italic">Certificate</p>
                </div>

                {/*Column 2*/}
                <div className="col-6 d-flex flex-column">
                    <p className="fw-semibold">Language 2</p>
                    <p className="fst-italic">Certificate</p>
                </div>

            </div>
        </>
    );
}

export default LanguagesPreview;
