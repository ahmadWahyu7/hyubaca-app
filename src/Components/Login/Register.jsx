import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Data/firebase";

import { db } from "../../Data/firebase";
import { addDoc, collection } from "firebase/firestore";

const Register = () => {
    // fungsi untuk menampilkan password
    const [showPassword, setShowPassword] = useState(false);
    const toggleShow = showPassword ? 'text' : 'password';
    const toggleTextPassword = showPassword ? 'Tutup' : 'Lihat';

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    // fungsi untuk responsive web
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const paddingRemove = isDesktop ? 'p-5' : '';

    // fungsi menambahkan akun ke dalam database
    const userRef = collection(db, "pengguna");

    // fungsi register
    const [namaUser, setNama] = useState('');
    const [emailUser, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        
        await createUserWithEmailAndPassword(auth, emailUser, password)
          .then((userCredential) => {
            // Berhasil mendaftar
            const user = userCredential.user;
            console.log(user);
            alert('berhasil');
            navigate('/login');
          })
          .catch((error) => {
            // Gagal mendaftar
            console.error(error);
          });

        await addDoc(userRef, {nama_lengkap: namaUser, email: emailUser, password: password, poin: 6000});
        setNama('');
        setEmail('');
        setPassword('');
      };

    return (
        <div className="row row-cols-1 row-cols-md-2 login-bg">
            <div className={`col ${paddingRemove}`}>
                <img src="https://github.com/ahmadWahyu7/data-gambar/blob/main/hyubaca-assets/login-assets/aset-login-02-register.png?raw=true" 
                alt="gambar sekretaris sedang menulis"
                loading="lazy" 
                className="img-fluid animasi-hero" />
            </div>
            <div className={`col d-flex align-items-center ${paddingRemove}`}>
                <form onSubmit={handleRegister} className="p-3 pb-5 login-card text-center">
                    <h1>DAFTAR AKUN</h1>
                    <div className="mt-3 mb-3">
                        <label htmlFor="namaLengkap" className="form-label">Nama Lengkap</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="namaLengkap"
                            aria-describedby="lengkapNama"
                            placeholder="Masukan nama lengkap . . . " 
                            value={namaUser}
                            onChange={(e)=> setNama(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label">Alamat Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="loginEmail" 
                            aria-describedby="emailLogin"
                            placeholder="Masukan Alamat Email ..." 
                            value={emailUser} 
                            onChange={(e)=> setEmail(e.target.value)}/>
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
                            onChange={(e)=> setPassword(e.target.value)}/>
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

export default Register;