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
            <div className="comic-info px-3 d-flex align-items-end">
                <div className="desc-info text-white p-2">
                    <h2>I want to be ...</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum veniam libero facere officiis consequuntur aut deserunt hic id odio amet.</p>
                </div>
            </div>
            <div className="list-eps pt-3 pb-5 bg-dark text-white">
                <h2>List Episode</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    {listEpisodes.map( (eps) => (
                        <Link to={`/komik/${eps.id_eps}`} className="col p-1 link-react" key={`eps${eps.id_eps}`}>
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
            </div>
        </div>
    )
}

export default Komik;