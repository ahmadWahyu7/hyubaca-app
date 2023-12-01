import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const CTA = () => {

    const isDesktop = useMediaQuery({ minWidth: 768 });
    const alignText = isDesktop ? 'd-flex align-items-center' : '';

    return (
        <div className="cta row row-cols-1 row-cols-md-2">
            <div className="col">
                <picture>
                    <source srcset="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/iconimage%2Fregister-image-webp.webp?alt=media&token=1e5656ca-0f64-411b-8661-6e155f00fba8" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/iconimage%2Fregister-image.png?alt=media&token=d0ed90ee-d07d-45aa-8363-8d2474e8dfc9" alt="mulai baca" className="img-fluid p-5"/>
                </picture>
            </div>
            <div className={`col text-center ${alignText}`}>
                <div>
                    <h2>Ayo, Mulai Belajarmu di Hyubaca<br />SEKARANG!!</h2>
                    <div className="my-3">
                        <Link to='/login' className="btn btn-navy btn-hero btn-lg">Baca Sekarang</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CTA;