const EducationPreview = () => {
    return (
        <>
            {/*Header*/}
            <h3 className="mb-2 mt-3">Education</h3>

            {/*Content*/}
            <div>
                {/*Row*/}
                <div className="row mb-4">

                    {/*Column 1 : Start Date - End Date*/}
                    <div className="col-3 d-flex flex-column fw-semibold">
                        <p>Start Date -</p>
                        <p>End Date</p>
                    </div>

                    {/*Column 2 : Degree - Institution - Description*/}
                    <div className="col-5 d-flex flex-column">
                        <p className="fw-semibold">Degree Name</p>
                        <p className="fst-italic">Institution</p>
                        <p>Description</p>
                    </div>

                    {/*Column 3 : Location*/}
                    <div className="col-3 d-flex flex-column">
                        <p>Location</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EducationPreview