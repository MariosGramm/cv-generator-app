const ProjectsForm = () => {
    return (
        <form className="mt-3 d-flex flex-column gap-3">

            <div>
                <label className="form-label">Project Title</label>
                <input type="text" className="form-control" placeholder="My Portfolio Project" />
            </div>

            <div>
                <label className="form-label">Description</label>
                <textarea className="form-control" rows={3} placeholder="Short description..." />
            </div>

            <div>
                <label className="form-label">Project Link</label>
                <input type="url" className="form-control" placeholder="https://github.com/..." />
            </div>

            {/*Add project button*/}
            <div className="mb-2">
                <button className="btn btn-outline-dark">Add new project</button>
            </div>

        </form>
    );
};

export default ProjectsForm;
