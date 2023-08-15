import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Data/firebase";
import { Link } from "react-router-dom";

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

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col d-flex justify-content-center my-3">
                    <div className="cover">
                        <img src={require('../../Assets/two-girls-one-boy.png')} alt="photosss" />
                    </div>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <h2>Jelajahi Excel</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum veniam libero facere officiis consequuntur aut deserunt hic id odio amet.</p>
                </div>
            </div>
            <div className="list-eps mt-5 pb-5">
                <h2>List Episode</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    {listEpisodes.map( (eps) => (
                        <Link to={`/komik/${eps.id_eps}`} className="col p-1 link-react" key={`eps${eps.id_eps}`}>
                            <div className="row border border-secondary rounded p-1 text-dark">
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
            </div>
        </div>
    )
}

export default Komik;