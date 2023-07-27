import React from "react";
import { useMediaQuery } from "react-responsive";

const AboutMe = () => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const textClass = isDesktop ? 'text-center' : 'ps-5';

    return (
        <div className="aboutme py-5">
            <h1 className={textClass}>kenalan yuk <br />dengan author</h1>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col p-5">
                    <img src="https://github.com/ahmadWahyu7/data-gambar/blob/main/hyubaca-assets/login-assets/myphotowithclip.png?raw=true" 
                    alt="foto ahmad wahyu pratama" 
                    className="img-fluid" 
                    data-aos="zoom-in" data-aos-delay="200" />
                </div>
                <div className="col d-flex align-items-center p-5">
                    <p>Halo! Perkenalkan, saya adalah seorang pencinta seni dan pendidikan yang bersemangat untuk berbagi pengetahuan dan kisah-kisah menarik melalui dunia komik. Di balik layar, saya adalah seorang penggemar komik sejak masa kecil, dan kini, saya ingin menggabungkan dua cinta saya, yaitu komik dan pembelajaran, dalam website komik belajar ini. Melalui setiap panel dan karakter yang saya ciptakan, harapan saya adalah dapat menginspirasi dan menyenangkan para pembaca sambil memberikan pembelajaran yang bermanfaat. Saya sangat bersemangat untuk mengajak Anda dalam petualangan menarik ini dan berharap dapat menjadi bagian dari perjalanan belajar bersama Anda.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;