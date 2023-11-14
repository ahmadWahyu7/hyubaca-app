import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Comments from "./Comments";
import Question from "./Question";
import Quiz from "./Quiz";
import ImagesArray from './ImagesArray';
import AddComment from './AddComment';

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

    const imageList1 = filterListEpisode.map(item => item.images_eps).flat();
    const imageList2 = filterListEpisode.map(item => item.images_eps2).flat();
    const questionList = filterListEpisode.map(item => item.questions_eps).flat();
    const quizList = filterListEpisode.map(item => item.quiz_eps).flat();
    const commentsList = filterListEpisode.map(item => item.comments_eps).flat();
    console.log(listEpisodes);
    console.log("skip");
    console.log(filterListEpisode);

    return (
        <div>
            <Link to="/dashboard" className='btn btn-outline-dark mt-2 ms-3'>kembali</Link>
            <section>
                <h2 className='text-center'>Episode {epsId}</h2>
                <ImagesArray imageList={imageList1} />
                <Question questionList={questionList} />
                <ImagesArray imageList ={imageList2} />
                <Quiz quizList={quizList} />
            </section>
            <section>
                <h1 className='ms-3 mb-3'>Komentar</h1>
                <AddComment intEpsParam={intEpsParam} />
                <Comments commentsList={commentsList} />
            </section>
        </div>
    )
}

export default Episode;