import React from 'react'

export default function Login() {
    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto align-items-center">
            <div className="card card0 border-0">
                <div className="row d-flex">
                    <div className="col-lg-6">
                        <div className="card1 pb-5">
                            <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                <img src="https://i.imgur.com/uNGdWHi.png" className="image" />
                            </div>
                        </div>
                    </div>
                    <form className="col-lg-6" action="/api/login" method="post">
                        <div className="card2 card border-0 px-4 py-5">
                            <div className="row px-1">
                                <h2 className="fw-bold display-2" style={{ color: "#0b4870" }}>EduMillenial</h2>
                            </div>
                            <div className="row px-3">
                                <label className="mb-1"><h6 className="mb-0 text-sm">Email Address</h6></label>
                                <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" />
                            </div>
                            <div className="row px-3">
                                <label className="mb-1"><h6 className="mb-0 text-sm">Password</h6></label>
                                <input type="password" name="password" placeholder="Enter password" />
                            </div>
                            <div className="row mb-3 px-3 mt-4">
                                <button type="submit" className="btn btn-primary text-center">Login</button>
                            </div>
                            <div className="row mb-4 px-1">
                                <small className="font-weight-bold">Don't have an account? <a className="text-danger" href='/'>Register</a></small>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}


