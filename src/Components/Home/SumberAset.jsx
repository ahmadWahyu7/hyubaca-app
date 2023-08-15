import React from "react";
import { Link } from "react-router-dom";

const SumberAset = () => {

    return (
        <div className="container">
            <h1 className="text-center pt-5 mb-5">SUMBER ASET WEB HYUBACA</h1>
            <section className="mb-3">
                <h2>1. Aset dari Iconscout</h2>
                <div className="row">
                    <div className="col">
                        <img src={require('../../Assets/two-girls-one-boy.png')} alt="asetaset" />
                    </div>
                    <div className="col">
                        digunakan untuk aset cover gambar
                    </div>
                </div>
            </section>
            <section className="mb-3">
                <h2>1. Aset dari Iconscout</h2>
                <div className="row">
                    <div className="col">
                        <img src={require('../../Assets/two-girls-one-boy.png')} alt="asetaset" />
                    </div>
                    <div className="col">
                        digunakan untuk aset cover gambar
                    </div>
                </div>
            </section>
            <div className="d-flex justify-content-center mb-5">
                <Link to='/' className='btn btn-outline-primary'>kembali</Link>
            </div>
        </div>
    )
}

export default SumberAset