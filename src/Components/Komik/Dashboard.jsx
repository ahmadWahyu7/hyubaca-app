import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../Data/firebase";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";

const Dashboard = () => {
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

    //fitur points
    // const [points, setPoints] = useState(0);
    const [listPengguna, setListPengguna] = useState([]);
    const penggunaRef = collection(db, 'pengguna', );
    const [emailUser, setEmailUser] = useState('');

    useEffect(() => {
        const getList = async () => {
            const data = await getDocs(penggunaRef);
            setListPengguna(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getList();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                Swal.fire('Login berhasil');
                console.log(user.email);
                setEmailUser(user.email);
            } else {
                Swal.fire('Anda telah Log Out');
                navigate('/login');
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const getTap = listPengguna?.filter( item => item.email === emailUser) || [];

    return (
        <div className='dashboard full d-flex align-items-center justify-content-end flex-column'>
            <div className="points d-flex bg-white p-3 mx-3 rounded shadow mb-3">
                <h3>My Points</h3>
                {getTap.map((item)=> (
                    <h3 className="ms-auto" key={item.id}>{item.poin}</h3>
                ))}
            </div>
            <div className="card-dashboard row bg-white shadow rounded mx-3 p-3 mb-3">
                <picture className="col-5">
                    <source srcSet="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/dashboard%2Fmulaibelajar-pointilisme-webp.webp?alt=media&token=3f8bbc75-7aca-4b6f-8a72-39ed67579193" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/dashboard%2Fmulaibelajar-pointilisme.png?alt=media&token=d8fd2273-e8fa-4f1f-816c-596a5b2fd60e" alt="mulai belajar icon" className="img-fluid"/>
                </picture>
                <div className="col-7">
                <Link to="/komik" className="">Mulai Baca Komik</Link></div>
            </div>
            <div className="card-dashboard mb-5">
                <button className="btn btn-danger btn-width" onClick={handleLogout}>Log out</button>
            </div>
        </div>
    )
}

export default Dashboard;