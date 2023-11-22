import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Data/firebase";
import eyeFill from '../../Assets/eye-fill.svg';
import eyeSlash from '../../Assets/eye-slash.svg';

const LoginDesktop = () => {
    // fungsi untuk menampilkan password
    const [showPassword, setShowPassword] = useState(false);
    const toggleShow = showPassword ? 'text' : 'password';
    const toggleTextPassword = showPassword ? eyeFill : eyeSlash;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

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
        <div className="row">
            <div className='col-5 d-flex justify-content-center align-items-center'>
                <picture>
                    <source srcSet="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/iconimage%2Flogin-image-webp.webp?alt=media&token=a11c0f54-3a90-429a-8414-596a26674f59" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/iconimage%2Flogin-image.png?alt=media&token=5b4dfe0f-181e-456e-a3b3-a26349e60749" alt="gambar login" className="img-fluid height-100 animasi-hero" />
                </picture>
            </div>
            <div className='col-7 p-5 d-flex align-items-center'>
                <form onSubmit={handleLogin} className="p-3 pb-5 login-card text-center">
                    <h1>Masuk dengan Email</h1>
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
                            onClick={handleShowPassword}>
                                <img src={toggleTextPassword} alt="toggleEye" />
                        </button>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">MASUK</button>
                    <p>Belum memiliki Akun ? <strong> <Link to='/register'>Daftar di sini</Link> </strong></p>
                </form>
            </div>
        </div>
    )
};

export default LoginDesktop;