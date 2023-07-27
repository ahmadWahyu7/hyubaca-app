import React from "react";

const Register = () => {

    return (
        <div className="row row-cols-1 row-cols-md-2 login-bg">
            <div className="col p-5">
                <img src="https://github.com/ahmadWahyu7/data-gambar/blob/main/hyubaca-assets/login-assets/aset-login-02-register.png?raw=true" 
                alt="gambar sekretaris sedang menulis" 
                className="img-fluid animasi-hero" />
            </div>
            <div className="col p-5 d-flex align-items-center">
                <form className="p-5 login-card text-center">
                    <h1>DAFTAR AKUN</h1>
                    <div className="mt-5 mb-3">
                        <label htmlFor="namaLengkap" className="form-label">Nama Lengkap</label>
                        <input type="text"
                            className="form-control"
                            id="namaLengkap"
                            aria-describedby="lengkapNama"
                            placeholder="Masukan nama lengkap . . . " />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label">Alamat Email</label>
                        <input type="email" 
                            className="form-control" 
                            id="loginEmail" 
                            aria-describedby="emailLogin"
                            placeholder="Masukan Alamat Email ..." />
                    </div>
                    <label htmlFor="loginPassword" className="form-label">Kata Sandi</label>
                    <div className="input-group mb-3">
                        <input type="password"
                            id="loginPassword" 
                            className="form-control" 
                            placeholder="Masukan Kata Sandi ..." 
                            aria-label="Masukan Kata Sandi ..." 
                            aria-describedby="loginPassword2" />
                        <button className="btn btn-outline-secondary" type="button" id="loginPassword2">Lihat</button>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register;