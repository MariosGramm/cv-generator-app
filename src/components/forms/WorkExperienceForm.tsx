const WorkExperienceForm = () => {
    return (
        <form className="mt-3 d-flex flex-column gap-3">

            <div>
                <label className="form-label">Job Title</label>
                <input type="text" className="form-control" placeholder="Software Engineer" />
            </div>

            <div>
                <label className="form-label">Company</label>
                <input type="text" className="form-control" placeholder="Google, Microsoft..." />
            </div>

            <div>
                <label className="form-label">Location</label>
                <input type="text" className="form-control" placeholder="Athens, Greece" />
            </div>

            <div className="d-flex gap-3">
                <div className="flex-fill">
                    <label className="form-label">Start Date</label>
                    <input type="date" className="form-control" />
                </div>

                <div className="flex-fill">
                    <label className="form-label">End Date</label>
                    <input type="date" className="form-control" />
                </div>
            </div>

            {/*Add work experience button*/}
            <div className="mb-2">
                <button className="btn btn-outline-dark">Add new work experience</button>
            </div>

        </form>
    );
};

export default WorkExperienceForm;
