import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Data/firebase";

import { db } from "../../Data/firebase";
import { addDoc, collection } from "firebase/firestore";
import { defaultQuestionData, defaultQuizData } from "../../Data/data-default";

import eyeFill from '../../Assets/eye-fill.svg';
import eyeSlash from '../../Assets/eye-slash.svg';
import Swal from "sweetalert2";

const RegisterDesktop = () => {
    // fungsi untuk menampilkan password
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] =  useState('');

    const toggleShow = showPassword ? 'text' : 'password';
    const toggleTextPassword = showPassword ? eyeFill : eyeSlash;

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
            //menyimpan data user ke storage
            await addDoc(userRef, {
                nama_lengkap: namaLengkapPengguna,
                nama_panggilan: namaPanggilanPengguna,
                email: emailPengguna,
                password: password,
                poin: 1000,
                is_question_done : defaultQuestionData,
                is_quiz_done : defaultQuizData,
            });
            navigate('/login');
        } catch (error) {
            // Gagal mendaftar
            console.error(error);
        }

        setNamaLengkapPengguna('');
        setNamaPanggilanPengguna('');
        setEmailPengguna('');
        setPassword('');
    };

    const handlePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        if(newPassword.length < 8){
            setErrorMessage('Minimal 8 Karakter!')
        }else{
            setErrorMessage('');
        }
    }

    return (
        <div className="row">
            <div className='col-5 d-flex justify-content-center align-items-center'>
                <picture>
                    <source srcSet="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/iconimage%2Fregister-image-webp.webp?alt=media&token=1e5656ca-0f64-411b-8661-6e155f00fba8" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/iconimage%2Fregister-image.png?alt=media&token=d0ed90ee-d07d-45aa-8363-8d2474e8dfc9" alt="gambar register" className="img-fluid height-100 animasi-hero" />
                </picture>
            </div>
            <div className='col-7 p-5 d-flex align-items-center'>
            
                <form onSubmit={handleRegister} className="p-3 pb-5 login-card text-center">
                    <h1>DAFTAR AKUN</h1>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="namaLengkap" placeholder="masukan nama lengkap ..." value={namaLengkapPengguna} onChange={(e)=> setNamaLengkapPengguna(e.target.value)} required/>
                        <label htmlFor="namaLengkap">Nama Lengkap</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="namaPanggilan" placeholder="masukan nama Panggilan ..." value={namaPanggilanPengguna} onChange={(e)=> setNamaPanggilanPengguna(e.target.value)} required/>
                        <label htmlFor="namaPanggilan">Nama Panggilan</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="emailPengguna" placeholder="contoh : ahmad@gmail.com" value={emailPengguna} onChange={(e)=> setEmailPengguna(e.target.value)} required/>
                        <label htmlFor="emailPengguna">Email Pengguna</label>
                    </div>
                    <div className="input-group mb-1">
                        <div className="form-floating">
                            <input type={toggleShow} className="form-control" id="kataSandiPengguna" placeholder="Masukan kata sandi ...." value={password} onChange={handlePassword} required/>
                            <label htmlFor="kataSandiPengguna">Kata Sandi</label>
                        </div>
                        <button type="button" className="btn btn-outline-secondary" id="buttonPassword" onClick={handleShowPassword}><img src={toggleTextPassword} alt="toggleEye"/></button>
                    </div>
                    <div className="text-danger text-start mb-3">{errorMessage}</div>
                    <button type="submit" className="btn btn-primary mb-2">Daftar</button>
                    <p>Sudah memiliki Akun ? <strong> <Link to='/login'>Login di sini</Link> </strong></p>
                </form>
            </div>
        </div>
    )
};

export default RegisterDesktop;