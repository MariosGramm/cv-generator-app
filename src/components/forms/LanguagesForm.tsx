const LanguagesForm = () => {
    return (
        <form className="mt-3 d-flex flex-column gap-3">

            <div>
                <label className="form-label">Language</label>
                <input type="text" className="form-control" placeholder="English, French..." />
            </div>

            <div>
                <label className="form-label">Certificate</label>
                <input type="text" className="form-control" placeholder="Michigan Proficiency Certificate" />
            </div>

            {/*Add language button*/}
            <div className="mb-2">
                <button className="btn btn-outline-dark">Add new language</button>
            </div>

        </form>


    );
};

export default LanguagesForm;
