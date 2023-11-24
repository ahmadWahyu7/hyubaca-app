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

    //auto scroll ke atas ketika memilih episode
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };

        return (
            <div className="row mb-5 px-2">
                <Link to={getPrevPath()} className="col btn btn-secondary m-1 d-flex justify-content-center align-items-center" onClick={scrollToTop}>
                    <img src={iconPrev} alt="icon previous" className="me-1"/>
                    Prev
                </Link>
                <Link to={getNextPath()} className="col btn btn-success m-1 d-flex justify-content-center align-items-center" onClick={scrollToTop}>
                    Next
                    <img src={iconNext} alt="icon next" className="ms-1"/>
                </Link>
            </div>
        )
    };

export default Navigation;