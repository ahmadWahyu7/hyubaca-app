import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../Data/firebase";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";
import power from '../../Assets/power.svg';

const DashboardMobile = () => {
    //fitur log out
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
          .then(() => {
            // Berhasil logout
            console.log('Logged out');
            navigate('/');
            
          })
          .catch((error) => {
            // Gagal logout
            console.error(error);
          });
    };

    const [listPengguna, setListPengguna] = useState([]);
    const penggunaRef = collection(db, 'pengguna');
    const [emailUser, setEmailUser] = useState('');

    useEffect(() => {
        const getList = async () => {
            const data = await getDocs(penggunaRef);
            setListPengguna(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getList();

        //cek status log in user
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmailUser(user.email);
            } else {
                Swal.fire('Anda telah Log Out');
                navigate('/login');
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const getUser = listPengguna?.filter( item => item.email === emailUser) || [];

    //auto scroll ke atas ketika memilih episode
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    return (
        <div className='dashboard'>
            <h2 className="text-navy text-center pt-3 pb-2 bg-sky">DASHBOARD</h2>
            <header className="d-flex flex-column align-items-center justify-content-end">
                <h3 className="text-white text-center pt-4">Selamat datang,<br />Semoga harimu menyenangkan</h3>
                <div className="points d-flex bg-white p-2 mt-auto rounded shadow mb-3">
                    <h3>My Points</h3>
                    {getUser.map((item)=> (<h3 className="ms-auto text-warning" key={item.id}>{item.poin} points</h3>))}
                </div>
            </header>
            <Link className="dashboard-card row bg-white shadow rounded mx-3 mb-3" to='/komik' onClick={scrollToTop}>
                <picture className="col-4 p-2">
                    <source srcSet="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/iconimage%2FMulaiBelajar.png?alt=media&token=969c2a03-ba81-4940-9cdb-71daa7fc9e1c" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/dashboard%2Fmulaibelajar-pointilisme.png?alt=media&token=d8fd2273-e8fa-4f1f-816c-596a5b2fd60e" alt="mulai belajar icon" className="img-fluid"/>
                </picture>
                <div className="col-8 ps-1 d-flex align-items-center">
                    <div>
                        <h3 className="text-navy">Mulai Belajar Yuk!</h3>
                        <p>Baca Cerita Komik tentang Microsoft Excel</p>
                    </div>
                </div>
            </Link>
            <Link className="dashboard-card row bg-white shadow rounded mx-3 mb-3" to='/komik'>
                <picture className="col-4 p-2">
                    <source srcSet="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/iconimage%2FMulaiTes.png?alt=media&token=6472beb5-6ae4-4278-8d37-47d63fe78c21" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/dashboard%2Fmulaibelajar-pointilisme.png?alt=media&token=d8fd2273-e8fa-4f1f-816c-596a5b2fd60e" alt="mulai belajar icon" className="img-fluid"/>
                </picture>
                <div className="col-8 ps-1 d-flex align-items-center">
                    <div>
                        <h3 className="text-navy">Mulai Tes Yuk!</h3>
                        <p>Apakah dirimu paham ??</p>
                    </div>
                </div>
            </Link>
            <Link className="dashboard-card row bg-white shadow rounded mx-3 mb-3" to='/komik'>
                <picture className="col-4 p-2">
                    <source srcSet="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/iconimage%2FLihatEnding.png?alt=media&token=86b154ff-673b-43ae-a5f0-cb4afd4774e9" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/dashboard%2Fmulaibelajar-pointilisme.png?alt=media&token=d8fd2273-e8fa-4f1f-816c-596a5b2fd60e" alt="mulai belajar icon" className="img-fluid"/>
                </picture>
                <div className="col-8 ps-1 d-flex align-items-center">
                    <div>
                        <h3 className="text-navy">Lihat Ending Cerita</h3>
                        <p>Apakah berakhir dengan baik?</p>
                    </div>
                </div>
            </Link>
            <div className="card-dashboard text-center pb-5">
                <button className="btn btn-danger btn-width" onClick={handleLogout}>
                    <img src={power} alt="power icon" className="me-1"/>
                    Log out
                </button>
            </div>
        </div>
    )
}

export default DashboardMobile;