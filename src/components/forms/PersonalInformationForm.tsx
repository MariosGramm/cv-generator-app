const PersonalInfoForm = () => {
    return (
        <div className="d-flex flex-column gap-3">

            {/* Full Name */}
            <div className="mb-2">
                <label className="form-label">Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                />
            </div>

            {/* Email */}
            <div className="mb-2">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="john@example.com"
                />
            </div>

            {/* Phone */}
            <div className="mb-2">
                <label className="form-label">Phone</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="+30 699 999 9999"
                />
            </div>

            {/* City of Residence,Country*/}
            <div className="mb-2">
                <label className="form-label">City of Residence,Country</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Athens, Greece"
                />
            </div>

            {/* Github */}
            <div className="mb-2">
                <label className="form-label">GitHub</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="https://github.com/username"
                />
            </div>

            {/* LinkedIn */}
            <div className="mb-2">
                <label className="form-label">LinkedIn</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="https://linkedin.com/in/username"
                />
            </div>

        </div>
    );
};

export default PersonalInfoForm;
