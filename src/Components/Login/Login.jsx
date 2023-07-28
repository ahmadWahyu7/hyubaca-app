import React, { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShow = showPassword ? 'text' : 'password';
    const toggleTextPassword = showPassword ? 'Tutup' : 'Lihat';

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    

    return (
        <div className="row row-cols-1 row-cols-md-2 login-bg">
            <div className="col">
                <img src="https://github.com/ahmadWahyu7/data-gambar/blob/main/hyubaca-assets/login-assets/aset-login-03-login.png?raw=true" 
                alt="gambar orang masuk pintu log in" 
                className="img-fluid p-5 animasi-hero" />
            </div>
            <div className="col p-5 d-flex align-items-center">
                <form className="p-5 login-card text-center">
                    <h1>MASUK KE AKUN</h1>
                    <div className="mt-5 mb-3">
                        <label htmlFor="loginEmail" className="form-label">Alamat Email</label>
                        <input type="email" 
                            className="form-control" 
                            id="loginEmail" 
                            aria-describedby="emailLogin"
                            placeholder="Masukan Alamat Email ..." />
                    </div>
                    <label htmlFor="loginPassword" className="form-label">Kata Sandi</label>
                    <div className="input-group mb-3">
                        <input type={toggleShow}
                            id="loginPassword" 
                            className="form-control" 
                            placeholder="Masukan Kata Sandi ..." 
                            aria-label="Masukan Kata Sandi ..." 
                            aria-describedby="loginPassword2" />
                        <button className="btn btn-outline-secondary" 
                        type="button" 
                        id="loginPassword2" 
                        onClick={handleShowPassword}>{toggleTextPassword}</button>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;