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
                    <source srcSet="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/logo%2Flogo%20hyubaca%20bg-white%20webp.webp?alt=media&token=afb1771c-4f75-4a79-862c-dc5c43b63a07" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/logo%2Flogo%20hyubaca%20bg-white.png?alt=media&token=84cad5e4-1cd3-4ac1-baaa-8d23a22a4099" alt="logo hyubaca" className="logo-hero"/>
                </picture>
                <h1 className={textClass}>Hyubaca</h1>
                <p className={textClass}>Ingin belajar Aplikasi Pengolah angka seperti Ms. Excel Namun sulit memahami fungsi dan rumus yang sering digunakan? Mari kita belajar memahami beberapa fungsi excel dengan membaca komik!</p>
                <div className="toggle-btn-hero1 mt-3">
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