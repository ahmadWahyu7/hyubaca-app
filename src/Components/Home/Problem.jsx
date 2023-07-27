import React from "react";
import { useMediaQuery } from "react-responsive";

const Problem = () => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const textClass = isDesktop ? 'text-center' : 'ps-5';

    return (
        <div className="problem py-5">
            <h1 className={textClass}>Pernahkah Kamu <br />Mengalami . . . </h1>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col p-5 d-flex justify-content-center">
                    <img src="https://github.com/ahmadWahyu7/data-gambar/blob/main/hyubaca-assets/home-assets/asset-problem-01.png?raw=true" 
                    alt="gambar masalah siswa sering buat plan tapi tidak direalisasikan" 
                    className="img-fluid"
                    data-aos="flip-left" data-aos-delay="100" />
                </div>
                <div className="col p-5 d-flex justify-content-center">
                    <img src="https://github.com/ahmadWahyu7/data-gambar/blob/main/hyubaca-assets/home-assets/asset-problem-02.png?raw=true" 
                    alt="gambar masalah siswa katanya mau belajar di rumah aja tapi malah tidur"
                    className="img-fluid"
                    data-aos="flip-left" data-aos-delay="200" />
                </div>
                <div className="col p-5 d-flex justify-content-center">
                    <img src="https://github.com/ahmadWahyu7/data-gambar/blob/main/hyubaca-assets/home-assets/asset-problem-03.png?raw=true" 
                    alt="gambar masalah siswa mau istirahat terus buka media sosial malah ketagihan berjam-jam"
                    className="img-fluid"
                    data-aos="flip-left" data-aos-delay="300" />
                </div>
            </div>
        </div>
    )
}

export default Problem;