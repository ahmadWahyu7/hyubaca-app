import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {

    return (
        <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
                <picture>
                    <source srcset="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/iconimage%2FpointismeWebp.webp?alt=media&token=18c26e2b-7dc8-4c42-ac6d-73c8f4728287" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/iconimage%2Fpointisme.jpg?alt=media&token=83b1e45a-b6b0-428c-9e5d-d0a221bbcf41" alt="mulai baca" className="img-fluid"/>
                </picture>
            </div>
            <div className="col">
                <h2>Ayo, Mulai Belajarmu di Hyubaca</h2>
                <div className="toggle-btn-hero1 mt-3">
                    <Link to='/login' className="btn btn-primary btn-lg">Baca Sekarang</Link>
                </div>
            </div>
        </div>
    )
};

export default CTA;