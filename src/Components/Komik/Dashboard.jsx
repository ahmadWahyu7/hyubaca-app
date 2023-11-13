import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../../Data/firebase";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

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

    useEffect(() => {
        const getList = async () => {
            const data = await getDocs(penggunaRef);
            setListPengguna(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const getTap = listPengguna?.filter( item => item.id === 'BM90OBC163liww3d1f89') || [];

    return (
        <div className='dashboard full d-flex align-items-center justify-content-end flex-column'>
            <div className="points d-flex bg-white p-3 mx-3 rounded shadow mb-3">
                <h3>My Points</h3>
                {getTap.map((item)=> (
                    <h3 className="ms-auto" key={item.id}>{item.poin}</h3>
                ))}
            </div>
            <div className="card-dashboard">
                <Link to="/komik" className="btn btn-primary btn-width p-5 mb-3">Mulai Baca Komik</Link>
            </div>
            <div className="card-dashboard mb-5">
                <button className="btn btn-danger btn-width" onClick={handleLogout}>Log out</button>
            </div>
        </div>
    )
}

export default Dashboard;