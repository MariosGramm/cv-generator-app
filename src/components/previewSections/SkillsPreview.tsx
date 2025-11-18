const SkillsPreview = () => {
    return (
        <>
            {/*Header*/}
            <h3 className="mb-2 mt-3">Skills</h3>

            {/* Row */}
            <div className="row mb-4">

                {/*Column 1*/}
                <div className="col-6 d-flex flex-column">
                    <p>Skill 1</p>
                </div>

                {/*Column 2*/}
                <div className="col-6 d-flex flex-column">
                    <p>Skill 2</p>
                </div>

            </div>
        </>
    )
}

export default SkillsPreview;