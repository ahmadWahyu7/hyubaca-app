import React from "react";
import { Link } from "react-router-dom";

const SumberAset = () => {

    return (
        <div className="container">
            <h1 className="text-center pt-5 mb-5">SUMBER ASET WEB HYUBACA</h1>
            
            <div className="d-flex justify-content-center mb-5">
                <Link to='/' className='btn btn-outline-primary'>kembali</Link>
            </div>
        </div>
    )
}

export default SumberAset