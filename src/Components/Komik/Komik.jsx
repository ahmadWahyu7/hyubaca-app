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
                    <h2>EXCEL EXPLORERS</h2>
                    <p>Evelyn bersama kedua temannya Karisma dan Luna merupakan siswa kelas 12 SMA Damai Sentosa. Namun kehidupan sehari-hari mereka berubah ketika mereka bertemu dengan Bu Anita. Bagaimana nasib mereka bertiga?</p>
                </div>
            </div>
            <div className="list-eps pt-5 pb-5">
                <h2 className="text-center">List Episode</h2>
                <div className="container">
                    {listEpisodes.map( (eps) => (
                        <Link to={`/komik/${eps.id_eps}`} className="p-1 link-react" key={`eps${eps.id_eps}`} onClick={scrollToTop}>
                            <div className="d-flex rounded p-1 bg-white text-dark shadow">
                                <div className="me-3">
                                    <div className="square"></div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <h4 className="fw-bold">Episode {eps.id_eps} : {eps.title_eps}</h4>
                                </div>
                            </div>
                            
                        </Link>
                    ))}
                </div>
                {/* tambahkan lihat ending */}
            </div>
        </div>
    )
}

export default Komik;