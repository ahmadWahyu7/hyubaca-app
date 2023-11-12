import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Data/firebase";
import { Link, useNavigate } from "react-router-dom";

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

    return (
        <div className='dashboard full'>
            <div className="points bg-white p-3 mx-3 rounded d-flex mb-3">
                <h3>My Points</h3>
                <h3 className="ms-auto">1000</h3>
            </div>
            <Link to="/komik" className="btn btn-primary btn-width mb-3">Mulai Baca Komik</Link>
            <button className="btn btn-danger btn-width" onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default Dashboard;