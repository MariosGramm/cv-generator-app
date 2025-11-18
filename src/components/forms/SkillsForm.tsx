const SkillsForm = () => {
    return (
        <form className="mt-3 d-flex flex-column gap-3">

            <div>
                <label className="form-label">Skill</label>
                <input type="text" className="form-control" placeholder="JavaScript, React..." />
            </div>

            <div>
                <label className="form-label">Level</label>
                <select className="form-select">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Expert</option>
                </select>
            </div>

            {/*Add skill button*/}
            <div className="mb-2">
                <button className="btn btn-outline-dark">Add new skill</button>
            </div>

        </form>
    );
};

export default SkillsForm;
