import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Data/firebase";

import { db } from "../../Data/firebase";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";

import eyeFill from '../../Assets/eye-fill.svg';
import eyeSlash from '../../Assets/eye-slash.svg';

const RegisterMobile = () => {
    // fungsi untuk menampilkan password
    const [showPassword, setShowPassword] = useState(false);
    const toggleShow = showPassword ? 'text' : 'password';
    const toggleTextPassword = showPassword ? eyeFill : eyeSlash ;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    // fungsi menambahkan akun ke dalam database
    const userRef = collection(db, "pengguna");

    // fungsi register
    const [namaLengkapPengguna, setNamaLengkapPengguna] = useState('');
    const [namaPanggilanPengguna, setNamaPanggilanPengguna] = useState('');
    const [emailPengguna, setEmailPengguna] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, emailPengguna, password)
            // Berhasil mendaftar
            const user = userCredential.user;
            console.log(user);
            Swal.fire('Berhasil Mendaftar!')
            navigate('/login');
            //menyimpan data user ke storage
            await addDoc(userRef, {
                nama_lengkap: namaLengkapPengguna,
                nama_panggilan: namaPanggilanPengguna,
                email: emailPengguna,
                password: password,
                poin: 1000,
                isQuestion1Done : false,
                isQuestion2Done : false,
                isQuestion3Done : false,
                isQuestion4Done : false,
                isQuestion5Done : false,
                isQuestion6Done : false,
                isQuiz1Done : false,
                isQuiz2Done : false,
                isQuiz3Done : false,
                isQuiz4Done : false,
                isQuiz5Done : false,
                isQuiz6Done : false
            });
        } catch (error) {
            // Gagal mendaftar
            console.error(error);
        }

        

        setNamaLengkapPengguna('');
        setNamaPanggilanPengguna('');
        setEmailPengguna('');
        setPassword('');
    };

    return (
        <div className="p-3">
            <picture>
                <source srcSet="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/iconimage%2Fregister-image-webp.webp?alt=media&token=1e5656ca-0f64-411b-8661-6e155f00fba8" />
                <img src="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/iconimage%2Fregister-image.png?alt=media&token=d0ed90ee-d07d-45aa-8363-8d2474e8dfc9" alt="gambar register" className="img-fluid" />
            </picture>
            <form onSubmit={handleRegister} className="px-3 pb-3 login-card text-center">
                <h1>DAFTAR AKUN</h1>
                <div className="pt-3 mb-3">
                    <input 
                        type="text"
                        className="form-control"
                        id="namaLengkap"
                        aria-describedby="lengkapNama"
                        placeholder="Masukan nama lengkap . . . " 
                        value={namaLengkapPengguna}
                        onChange={(e)=> setNamaLengkapPengguna(e.target.value)} />
                </div>
                <div className="mt-3 mb-3">
                    <input 
                        type="text"
                        className="form-control"
                        id="namaPanggilan"
                        aria-describedby="PanggilanNama"
                        placeholder="Masukan nama Panggilan . . . " 
                        value={namaPanggilanPengguna}
                        onChange={(e)=> setNamaPanggilanPengguna(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="loginEmail" 
                        aria-describedby="emailLogin"
                        placeholder="Masukan Alamat Email ..." 
                        value={emailPengguna} 
                        onChange={(e)=> setEmailPengguna(e.target.value)}/>
                </div>
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
                        onClick={handleShowPassword}>
                            <img src={toggleTextPassword} alt="toggleEye" />
                        </button>
                </div>
                <button type="submit" className="btn btn-primary">Daftar</button>
                <p>Sudah memiliki Akun ? <strong> <Link to='/login'>Login di sini</Link> </strong></p>
            </form>
        </div>
    )
};

export default RegisterMobile;