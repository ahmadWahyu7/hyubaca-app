import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import AddComment from "./AddComment";
import Comments from "./Comments";
import Question from "./Question";
import Quiz from "./Quiz";

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Data/firebase';

const Episode = () => {
    const { epsId } = useParams();
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

    const intEpsParam = parseInt(epsId)
    const filterListEpisode = listEpisodes.filter( item => item.id_eps === intEpsParam);

    return (
        <div>
            <Link to="/dashboard" className='btn btn-outline-dark mt-2 ms-3'>kembali</Link>
            <section>
                <h2 className='text-center'>Episode {epsId}</h2>
                {filterListEpisode.map((eps) =>(
                <div className='comic-size d-flex align-items-center flex-column'>
                    {eps.images_eps.map((part1, index)=>(
                        <img src={part1} alt={`gambar${index}`} />
                    ))}
                    <Question id={epsId} />
                    {eps.images_eps2.map((part2, index)=>(
                        <img src={part2} alt={`gambar${index}`} />
                    ))}
                </div>
                ))}
                <Quiz />
            </section>
            <section>
                <AddComment />
                <Comments />
            </section>
        </div>
    )
}

export default Episode;