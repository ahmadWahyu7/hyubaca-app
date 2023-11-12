import React from "react";
import { useMediaQuery } from "react-responsive";

const AboutMe = () => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const textClass = isDesktop ? 'text-center' : 'ps-5';

    return (
        <div className="aboutme py-5">
            <h1 className={textClass}>kenalan yuk <br />dengan author</h1>
            <div className="row row-cols-1 row-cols-md-2 mx-2 p-3">
                <div className="col p-5">
                    <img src="https://github.com/ahmadWahyu7/data-gambar/blob/main/hyubaca-assets/login-assets/myphotowithclip.png?raw=true" 
                    alt="foto ahmad wahyu pratama" 
                    className="img-fluid" 
                    data-aos="zoom-in" data-aos-delay="200" />
                </div>
                <div className="col d-flex flex-column bg-white text-dark p-3">
                    <p>Halo! Perkenalkan, saya Ahmad, seorang mahasiswa jurusan Pendidikan Ilmu Komputer di Universitas Pendidikan Indonesia.</p>
                    <p>Saya membuat web Hyubaca ini untuk membagikan pengetahuan dari sebuah materi menjadi <strong>kisah-kisah menarik melalui dunia komik.</strong></p>
                    <p>Melalui setiap panel dan karakter yang saya ciptakan, harapan saya adalah dapat menginspirasi dan menyenangkan para pembaca sambil <strong>memberikan pembelajaran yang bermanfaat.</strong></p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;