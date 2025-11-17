const  TopNavbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary border border-dark-subtle">
                <div className="container-fluid">
                    <ul className="navbar-nav flex-row d-flex justify-content-between w-100">

                        <li className="nav-item">
                            <a className="nav-link active">CV Generator</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <i className="bi bi-download"></i>
                                Download as PDF
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default TopNavbar;