import type {PersonalInfo} from "../../types.ts";


type PersonalInfromationFormProps = {
    personalInfo : PersonalInfo
    setPersonalInfo: (fn: (prev: PersonalInfo) => PersonalInfo) => void;
}


const PersonalInfoForm = ({personalInfo,setPersonalInfo}:PersonalInfromationFormProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setPersonalInfo(prev => ({ ...prev,
            [name]: value
        }));
    }

    return (
        <div className="d-flex flex-column gap-3">

            {/* Full Name */}
            <div className="mb-2">
                <label className="form-label">First Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="John"
                    name="firstName"
                    value={personalInfo.firstName}
                    onChange={handleChange}
                />
            </div>

            {/* Last Name */}
            <div className="mb-2">
                <label className="form-label">Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Doe"
                    name="lastName"
                    value={personalInfo.lastName}
                    onChange={handleChange}
                />
            </div>



            {/* Email */}
            <div className="mb-2">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="john@example.com"
                    name="email"
                    value={personalInfo.email}
                    onChange={handleChange}
                />
            </div>

            {/* Phone */}
            <div className="mb-2">
                <label className="form-label">Phone</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="+30 699 999 9999"
                    name="phone"
                    value={personalInfo.phone}
                    onChange={handleChange}
                />
            </div>

            {/* City of Residence,Country*/}
            <div className="mb-2">
                <label className="form-label">City of Residence,Country</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Athens, Greece"
                    name="location"
                    value={personalInfo.location}
                    onChange={handleChange}
                />
            </div>

            {/* Github */}
            <div className="mb-2">
                <label className="form-label">GitHub</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="https://github.com/username"
                    name="github"
                    value={personalInfo.github}
                    onChange={handleChange}
                />
            </div>

            {/* LinkedIn */}
            <div className="mb-2">
                <label className="form-label">LinkedIn</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="https://linkedin.com/in/username"
                    name="linkedin"
                    value={personalInfo.linkedin}
                    onChange={handleChange}
                />
            </div>

        </div>
    );
};

export default PersonalInfoForm;
