const WorkExperiencePreview = () => {
    return (
        <>
            {/*Header*/}
            <h3 className="mb-2">Work Experience</h3>

            {/*Content*/}
            <div>
                {/*Row*/}
                <div className="row mb-4">

                    {/*Column 1 : Start Date - End Date*/}
                    <div className="col-3 d-flex flex-column">
                        <p>Start Date -</p>
                        <p>End Date</p>
                    </div>

                    {/*Column 2 : Job Title - Company - Description*/}
                    <div className="col-5 d-flex flex-column">
                        <p className="fw-semibold">Job Title</p>
                        <p className="fst-italic">Company</p>
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

export default WorkExperiencePreview