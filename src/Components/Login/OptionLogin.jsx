import React from "react";
import { Link } from "react-router-dom";

const OptionLogin = () => {

    return (
        <div className="row row-cols-1 row-cols-lg-2 login-bg">
            <div className="col d-flex justify-content-center p-5">
                <img src="https://github.com/ahmadWahyu7/data-gambar/blob/main/hyubaca-assets/login-assets/aset-login-01-optionlogin.png?raw=true" 
                alt="pilih masuk atau daftar" 
                className="img-fluid animasi-hero" />
            </div>
            <div className="col d-flex align-items-center p-5">
                <div className="login-card p-5 d-flex flex-column align-items-center">
                    <h2 className="text-center mb-3">Eits, Sebelum mulai baca komik, Silahkan masuk dengan akun terlebih dahulu atau daftar jika belum memiliki akun</h2>
                    <Link to='/login' className="btn btn-primary mb-3 btn-lg">Masuk</Link>
                    <Link to='/register' className="btn btn-secondary btn-lg">Daftar</Link>
                </div>
            </div>
        </div>
    )
}

export default OptionLogin;