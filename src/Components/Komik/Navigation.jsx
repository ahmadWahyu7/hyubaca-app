import React from "react";
import { Link } from "react-router-dom";

import iconPrev from '../../Assets/caret-left.svg';
import iconNext from '../../Assets/caret-right.svg';

const Navigation = ({epsId}) => {
    // Fungsi untuk menghasilkan path yang sesuai untuk tombol "prev"
    const getPrevPath = () => {
        if (epsId > 0) {
        return `/komik/${epsId - 1}`;
        } else {
        return `/komik`;
        }
    };

    // Fungsi untuk menghasilkan path yang sesuai untuk tombol "next"
    const getNextPath = () => {
        if (epsId < 6) {
        return `/komik/${epsId + 1}`;
        } else {
        return `/komik`;
        }
    };
        return (
            <div className="row">
                <Link to={getPrevPath()} className="col btn btn-secondary m-1 d-flex justify-content-center align-items-center">
                    <img src={iconPrev} alt="icon previous" className="me-1"/>
                    Prev
                </Link>
                <Link to={getNextPath()} className="col btn btn-success m-1 d-flex justify-content-center align-items-center">
                    Next
                    <img src={iconNext} alt="icon next" className="ms-1"/>
                </Link>
            </div>
        )
    };

export default Navigation;