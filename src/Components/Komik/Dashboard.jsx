import React from "react";
import Komik from "./Komik";
import { useMediaQuery } from "react-responsive";
import { signOut } from "firebase/auth";
import { auth } from "../../Data/firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const isDesktop = useMediaQuery({ minWidth: 768});
    const paddingDashboard = isDesktop ? 'px-5 pb-5' : 'pb-5';

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
        <div className={`dashboard ${paddingDashboard}`}>
            
            <nav className="row">
                <div className="col d-flex align-items-center">
                    <h1>Dashboard</h1>
                </div>
                <div className="col p-3 d-flex justify-content-end">
                    <button className="btn btn-danger" onClick={handleLogout}>Log out</button>
                </div>
            </nav>

            <section>
                <h1>Selamat datang, <br />Semoga harimu menyenangkan</h1>
                <div className="d-flex justify-content-end me-3">
                    <div className="border border-warning rounded-4 text-center text-warning py-1 px-5">
                        <h4>My Points</h4>
                        <div>5000</div>
                    </div>
                </div>
            </section>

            <section className="container container-bg mt-3 rounded">
                <Komik />
            </section>
        </div>
    )
}

export default Dashboard;