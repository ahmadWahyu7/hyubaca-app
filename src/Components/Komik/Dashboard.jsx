import React from "react";
import Komik from "./Komik";

const Dashboard = () => {

    return (
        <div className="dashboard pb-5 px-5">
            <nav className="row">
                <div className="col">
                    <h1>Dashboard</h1>
                </div>
                <div className="col">
                    <p className="text-end pe-5">Log out</p>
                </div>
            </nav>
            <h1>Selamat datang, <br />Semoga harimu menyenangkan</h1>
            <section className="container container-bg mt-5 p-2 rounded">
                <div className="point-card text-center">
                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col p-3 text-warning">
                            <div className="border border-warning rounded-4">
                                <h4>My Points</h4>
                                <div>5000</div>
                            </div>
                        </div>
                        <div className="col p-3 text-success">
                            <div className="border border-success rounded-4">
                                <h4>My Happy Ending</h4>
                                <div>5000</div>
                            </div>
                        </div>
                        <div className="col p-3 text-danger">
                            <div className="border border-danger rounded-4">
                                <h4>My Bad Ending</h4>
                                <div>5000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container container-bg mt-5 p-5 rounded">
                <Komik />
            </section>
        </div>
    )
}

export default Dashboard;