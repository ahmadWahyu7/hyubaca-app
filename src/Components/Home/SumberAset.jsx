import React from "react";
import { Link } from "react-router-dom";

const SumberAset = () => {

    return (
        <div className="container">
            <h1 className="text-center pt-5 mb-5">SUMBER ASET WEB HYUBACA</h1>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
            </div>
            <div className="d-flex justify-content-center mb-5">
                <Link to='/' className='btn btn-outline-primary'>kembali</Link>
            </div>
        </div>
    )
}

export default SumberAset