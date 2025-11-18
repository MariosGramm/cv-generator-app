const LanguagesForm = () => {
    return (
        <form className="mt-3 d-flex flex-column gap-3">

            <div>
                <label className="form-label">Language</label>
                <input type="text" className="form-control" placeholder="English, French..." />
            </div>

            <div>
                <label className="form-label">Proficiency</label>
                <select className="form-select">
                    <option>Native</option>
                    <option>Fluent</option>
                    <option>Professional</option>
                    <option>Intermediate</option>
                    <option>Basic</option>
                </select>
            </div>

            {/*Add language button*/}
            <div className="mb-2">
                <button className="btn btn-outline-dark">Add new certification</button>
            </div>

        </form>


    );
};

export default LanguagesForm;
