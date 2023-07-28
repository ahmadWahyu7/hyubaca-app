import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="p-5 text-center">
            <p>hyubaca copyright</p>
            <p><Link to="/sumberaset">Lihat</Link> sumber/referensi aset pada web hyubaca</p>
            <Link to="/dashboard" className="btn btn-danger">dashboard</Link>
        </footer>
    )
}

export default Footer;