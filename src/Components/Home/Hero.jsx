import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const textClass = isDesktop ? '' : 'text-center';
    const textPadding = isDesktop ? 'ps-5' : 'px-5 pt-5';

    return (
        <div className="hero row row-cols-1 row-cols-md-2 pb-5">
            <div className={`col d-flex flex-column justify-content-center ${textPadding}`}>
                <h1 className={textClass}>Hyubaca</h1>
                <p className={textClass}>Tempat kamu belajar berbagai materi dengan membaca komik</p>
                <div className="toggle-btn-hero1">
                    <Link to='/optionlogin' className="btn btn-primary btn-lg">Baca Sekarang</Link>
                </div>
            </div>
            <div className="col d-flex flex-column align-items-center">
                <img src="https://github.com/ahmadWahyu7/data-gambar/blob/main/hyubaca-assets/home-assets/asset-hero-web.png?raw=true" 
                alt="gambar anak sekolah terbang di atas langit" 
                className="img-fluid animasi-hero" />
                <div className="toggle-btn-hero2">
                    <Link to='/optionlogin' className="btn btn-primary btn-lg">Baca Sekarang</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;