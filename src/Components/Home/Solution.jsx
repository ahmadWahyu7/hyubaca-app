import React from "react";
import { useMediaQuery } from "react-responsive";

const Solution = () => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const textClass = isDesktop ? 'text-center mb-3' : 'ps-5 mb-3';
    const colSolution = isDesktop ? 'col d-flex align-items-center' : 'col d-flex align-items-center justify-content-center';
    const colImg = isDesktop ? 'col d-flex justify-content-end' : 'col d-flex justify-content-center';
    const textSolution = isDesktop ? 'solution-p' : 'solution-p text-center px-3'

    return (
        <div className="solution py-5">
            <h1 className={textClass}>Di Hyubaca, belajar <br />makin  seru karena . . . </h1>
            <div className="row row-cols-1 row-cols-md-2">
                <div className={colImg} data-aos="fade-right" data-aos-delay="200">
                    <img src="https://github.com/ahmadWahyu7/data-gambar/blob/main/hyubaca-assets/home-assets/asset-solution-01.png?raw=true" 
                    alt="gambar solusi hyubaca dapat digunakan kapan pun"
                    className="img-fluid" />
                </div>
                <div className={colSolution} >
                    <p className={textSolution}>Materi dikemas dalam <strong>BENTUK CERITA</strong> yang ringan untuk dibaca kapan pun</p>
                </div>
                <div className={colImg} data-aos="fade-right" data-aos-delay="200">
                    <img src="https://github.com/ahmadWahyu7/data-gambar/blob/main/hyubaca-assets/home-assets/asset-solution-02.png?raw=true" 
                    alt="gambar solusi hyubaca interaktif"
                    className="img-fluid" />
                </div>
                <div className={colSolution}>
                    <p className={textSolution}>Memiliki fitur <strong>INTERAKTIF</strong> yang mampu melatih pemahaman materi secara mendalam</p>
                </div>
                <div className={colImg} data-aos="fade-right" data-aos-delay="200">
                    <img src="https://github.com/ahmadWahyu7/data-gambar/blob/main/hyubaca-assets/home-assets/asset-solution-03.png?raw=true" 
                    alt="gambar solusi hyubaca memiliki ending cerita yang berbeda"
                    className="img-fluid" />
                </div>
                <div className={colSolution}>
                    <p className={textSolution}>Terdapat <strong>ENDING CERITA yang BERBEDA</strong> untuk meningkatkan rasa penasaran</p>
                </div>
            </div>
        </div>
    )
}

export default Solution;