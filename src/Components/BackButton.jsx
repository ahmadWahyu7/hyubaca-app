import React from "react";
import { Link } from "react-router-dom";

import LeftArrow from '../Assets/arrow-left-circle.svg';

const BackButton = ({linkto}) => {

    return (
        <div className="position-absolute">
            <Link to={linkto}>
                <img src={LeftArrow} alt="kembali" className="back-button opacity-50 ms-3 mt-3"/>
            </Link>
        </div>
    )
};

export default BackButton;