const EducationForm = () => {
    return (

        <div className="d-flex flex-column gap-3">

            {/*Institution*/}
            <div className="mb-2">
                <label className="form-label">Institution</label>
                <input type="text"
                className="form-control"
                placeholder="Institution"/>
            </div>

            {/*Degree*/}
            <div className="mb-2">
                <label className="form-label">Degree</label>
                <input type="text"
                className="form-control"
                placeholder="Bachelor's degree"/>
            </div>

            {/*Start Date*/}
            <div className="mb-2">
                <label className="form-label">Start Date</label>
                <input type="date"
                className="form-control"/>
            </div>

            {/*End Date*/}
            <div className="mb-2">
                <label className="form-label">End Date</label>
                <input type="date"
                className="form-control"/>
            </div>

            {/*Description*/}
            <div className="mb-2">
                <label className="form-label">Description</label>
                <input type="text"
                className="form-control"
                placeholder="Description"/>
            </div>

            {/*Add education button*/}
            <div className="mb-2">
                <button className="btn btn-outline-dark">Add new education</button>
            </div>
        </div>

    )
}

export default EducationForm;