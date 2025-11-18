const ProjectsPreview = () => {
    return (
        <>
            {/*Header*/}
            <h3 className="mb-2">Projects</h3>

            {/*Content*/}
            <div>
                {/*Row*/}
                <div className="row mb-4">

                    {/*Column 1 : Start Date - End Date*/}
                    <div className="col-3 d-flex flex-column">
                        <p>Start Date -</p>
                        <p>End Date</p>
                    </div>

                    {/*Column 2 : Project title - Description */}
                    <div className="col-5 d-flex flex-column">
                        <p className="fw-semibold">Project title</p>
                        <p>Description</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProjectsPreview;