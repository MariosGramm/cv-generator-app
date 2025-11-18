const PersonalInfoPreview = () => {
    return (
        <>
        <h1 className="text-center">John Doe</h1>

            <div className="row mt-3">

                {/* Left column */}
                <div className="col-6 d-flex flex-column gap-2">
                    <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-envelope"></i>
                        <span>johndoe@gmail.com</span>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-geo-alt"></i>
                        <span>City, Country</span>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-github"></i>
                        <span>JohnDoe</span>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-6 d-flex flex-column gap-2">
                    <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-telephone"></i>
                        <span>+30 699 999 999</span>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-linkedin"></i>
                        <span>John Doe</span>
                    </div>
                </div>

            </div>

        </>
    )
}

export default PersonalInfoPreview