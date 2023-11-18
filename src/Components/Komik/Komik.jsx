import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Data/firebase";
import { Link } from "react-router-dom";

import BackButton from "../BackButton";

const Komik = () => {
    // fitur menampilkan list episode
    const [listEpisodes, setLisEpisodes] = useState([]);
    const listEpisodeRef = collection(db, "listepisode");

    useEffect( () => {
        const getListEpisodes = async () => {
            const data = await getDocs(listEpisodeRef);
            setLisEpisodes(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getListEpisodes();

        // eslint-disable-next-line
    }, []);

    //auto scroll ke atas ketika memilih episode
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    return (
        <div>
            <BackButton linkto={'/dashboard'} />
            <div className="comic-info px-3 d-flex align-items-end">
                <div className="desc-info text-white p-2">
                    <h2>Aku ingin menjadi ...</h2>
                    <p>Evelyn bersama kedua temannya Karisma dan Luna tiba-tiba masuk ke dalam dunia asing ketika sedang membersihkan perpustakaan. Bagaimana cara mereka keluar dari dunia asing tersebut?</p>
                </div>
            </div>
            <div className="list-eps pt-3 pb-5 bg-dark text-white">
                <h2 className="text-center">List Episode</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    {listEpisodes.map( (eps) => (
                        <Link to={`/komik/${eps.id_eps}`} className="col p-1 link-react" key={`eps${eps.id_eps}`} onClick={scrollToTop}>
                            <div className="row border border-secondary rounded p-1 text-white">
                                <div className="col">
                                    <div className="square"></div>
                                </div>
                                <div className="col-8 d-flex align-items-center">
                                    <h4>Episode {eps.id_eps} : {eps.title_eps}</h4>
                                </div>
                            </div>
                            
                        </Link>
                    ))}
                </div>
                <Link className="dashboard-card row bg-white shadow rounded mx-3 mb-3" to='/komik'>
                    <picture className="col-4 p-2">
                        <source srcSet="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/dashboard%2Fmulaibelajar-pointilisme-webp.webp?alt=media&token=3f8bbc75-7aca-4b6f-8a72-39ed67579193" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/dashboard%2Fmulaibelajar-pointilisme.png?alt=media&token=d8fd2273-e8fa-4f1f-816c-596a5b2fd60e" alt="mulai belajar icon" className="img-fluid"/>
                    </picture>
                    <div className="col-8 ps-1 d-flex align-items-center">
                        <div>
                            <h3>Mulai Belajar Yuk!</h3>
                            <p>Baca Cerita Komik tentang Microsoft Excel</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Komik;