import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Data/firebase";

const Login = () => {
    // fungsi untuk menampilkan password
    const [showPassword, setShowPassword] = useState(false);
    const toggleShow = showPassword ? 'text' : 'password';
    const toggleTextPassword = showPassword ? 'Tutup' : 'Lihat';
    
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    // fungsi untuk mengatur responsive web
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const paddingRemove = isDesktop ? 'p-5' : '';

    // fungsi login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Berhasil login
            const user = userCredential.user;
            console.log(user);
            navigate('/dashboard');
          })
          .catch((error) => {
            // Gagal login
            console.error(error);
          });
      };

    return (
        <div className="row row-cols-1 row-cols-md-2 login-bg">
        <div className={`col ${paddingRemove}`}>
                <img src="https://github.com/ahmadWahyu7/data-gambar/blob/main/hyubaca-assets/login-assets/aset-login-03-login.png?raw=true" 
                alt="gambar orang masuk pintu log in"
                loading="lazy" 
                className="img-fluid animasi-hero" />
            </div>
            <div className={`col ${paddingRemove} d-flex align-items-center`}>
                <form onSubmit={handleLogin} className="p-3 pb-5 login-card text-center">
                    <h1>MASUK KE AKUN</h1>
                    <div className="mt-3 mb-3">
                        <label htmlFor="loginEmail" className="form-label">Alamat Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="loginEmail" 
                            aria-describedby="emailLogin"
                            placeholder="Masukan Alamat Email ..."
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <label htmlFor="loginPassword" className="form-label">Kata Sandi</label>
                    <div className="input-group mb-3">
                        <input 
                            type={toggleShow}
                            id="loginPassword" 
                            className="form-control" 
                            placeholder="Masukan Kata Sandi ..." 
                            aria-label="Masukan Kata Sandi ..." 
                            aria-describedby="loginPassword2"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)} />
                        <button 
                            className="btn btn-outline-secondary" 
                            type="button" 
                            id="loginPassword2" 
                            onClick={handleShowPassword}>{toggleTextPassword}
                        </button>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;