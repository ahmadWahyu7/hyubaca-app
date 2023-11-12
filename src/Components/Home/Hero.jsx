import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const textClass = isDesktop ? '' : 'text-center';
    const textPadding = isDesktop ? 'ps-5' : 'px-5 pt-5';
    const logoHyubaca = isDesktop ? '' : 'd-flex justify-content-center'

    return (
        <div className="hero row row-cols-1 row-cols-md-2 pb-5">
            <div className={`col d-flex flex-column justify-content-center ${textPadding}`}>
                <picture className={logoHyubaca}>
                    <source srcSet="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/logo%2Flogo%20hyubaca%20new%20webp.webp?alt=media&token=f5b56779-cddb-444c-b861-1b5c7c045209" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/logo%2Flogo%20hyubaca%20new.png?alt=media&token=73944fb0-b3ff-46a2-a760-19fc00e526cb" alt="logo hyubaca" className="logo-hero"/>
                </picture>
                <h1 className={textClass}>Hyubaca</h1>
                <p className={textClass}>Tempat kamu belajar berbagai materi dengan membaca komik</p>
                <div className="toggle-btn-hero1">
                    <Link to='/login' className="btn btn-primary btn-lg">Baca Sekarang</Link>
                </div>
            </div>
            <div className="col d-flex flex-column align-items-center">
                <img src="https://github.com/ahmadWahyu7/data-gambar/blob/main/hyubaca-assets/home-assets/asset-hero-web.png?raw=true" 
                alt="gambar anak sekolah terbang di atas langit" 
                className="img-fluid animasi-hero" />
                <div className="toggle-btn-hero2">
                    <Link to='/login' className="btn btn-primary btn-lg">Baca Sekarang</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;