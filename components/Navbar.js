import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark static-top" style={{backgroundColor: "#0b4870"}}>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        EduMillenial
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <Link href="/">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                            </Link>
                            <Link href="/course">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Course</a>
                                </li>
                            </Link>
                            <Link href="/about">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                            </Link>
                            <button class="btn btn-light btn-register rounded-0 me-2" type="button">Log in</button>
                            <button class="btn btn-outline-light btn-register rounded-0 me-2" type="button">Sign up</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;