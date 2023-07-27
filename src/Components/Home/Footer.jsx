import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="p-5 text-center">
            <p className="">hyubaca copyright</p>
            <p><Link to="/sumberaset">Lihat</Link> sumber/referensi aset pada web hyubaca</p>
        </footer>
    )
}

export default Footer;