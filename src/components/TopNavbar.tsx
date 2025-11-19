
type TopNavbarProps = {
    onDownload() : void
}


const TopNavbar = ({onDownload}:TopNavbarProps) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary border border-dark-subtle no-print">
                <div className="container-fluid">
                    <ul className="navbar-nav flex-row d-flex justify-content-between w-100">

                        <li className="nav-item">
                            <a className="nav-link active">CV Generator</a>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link active" onClick={onDownload}>
                                <i className="bi bi-download"></i>
                                Download as PDF
                            </button>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default TopNavbar;