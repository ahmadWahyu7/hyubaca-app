import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';

import Comments from "./Comments";
import Question from "./Question";
import Quiz from "./Quiz";
import ImagesArray from './ImagesArray';
import AddComment from './AddComment';

import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../../Data/firebase';
import { onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";
import BackButton from '../BackButton';

import ScrollTop from '../../Assets/arrow-up-circle.svg';
import { useMediaQuery } from 'react-responsive';

const Episode = () => {
    const { epsId } = useParams();
    const [listEpisodes, setLisEpisodes] = useState([]);
    const listEpisodeRef = collection(db, "listepisode");

    const [listPengguna, setListPengguna] = useState([]);
    const penggunaRef = collection(db, 'pengguna');
    const [emailUser, setEmailUser] = useState('');

    useEffect( () => {
        const getListEpisodes = async () => {
            const data = await getDocs(listEpisodeRef);
            setLisEpisodes(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getListEpisodes();

        const getListPengguna = async () => {
            const data = await getDocs(penggunaRef);
            setListPengguna(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getListPengguna();

        //cek status log in user
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmailUser(user.email);
                console.log(user.email);
            } else {
                Swal.fire('Anda telah Log Out');
            }
        });
        // eslint-disable-next-line
    }, []);

    const isDesktop = useMediaQuery({ minWidth: 768 });

    useEffect(() => {
        if(epsId === '0' && isDesktop === true){
            Swal.fire({
                imageUrl: "https://placeholder.pics/svg/500x1500",
                imageHeight: 1500,
                imageAlt: "A tall image"
              });
        }else if (epsId === '0' && isDesktop === false){
            Swal.fire({
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/other%2Finfo-episode2x.png?alt=media&token=aecbdfd6-fa74-408e-bb0e-0ac72cc96569",
                imageHeight: 1038,
                imageAlt: "A tall image"
              });
        }
        // eslint-disable-next-line
    },[epsId]);

    const intEpsParam = parseInt(epsId);
    const filterListEpisode = listEpisodes.filter( item => item.id_eps === intEpsParam);

    const imageList1 = filterListEpisode.map(item => item.images_eps).flat();
    const imageList2 = filterListEpisode.map(item => item.images_eps2).flat();
    const commentsList = filterListEpisode.map(item => item.comments_eps).flat();

    //mendapatkan data user
    const getUser = listPengguna.filter( item => item.email === emailUser);
    const getNamaPanggil = getUser.map( item => item.nama_panggilan).toString();
    const getUserID = getUser.map( item => item.id);
    const getListAllQuestionDone = getUser.map(item => {return item.is_question_done}).flat();
    const getListAllQuizDone = getUser.map(item => {return item.is_quiz_done}).flat();

    //auto scroll ke atas ketika memilih episode
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    return (
        <div>
            <div className="position-relative">
                <img src={ScrollTop} alt="scroll ke atas" onClick={scrollToTop} className='back-button me-3 opacity-50 position-fixed bottom-0 end-0 translate-middle-y'/>
            </div>
            <BackButton linkto={'/komik'} />
            <section>
                <div className="full d-flex align-items-center justify-content-center">
                    <div className="logo-epi">
                        <picture>
                            <source srcSet='https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/dashboard%2Flogo-episode-webp.webp?alt=media&token=d9fcbcb8-74a8-456b-af4a-9edcb1cc2d2d'/>
                            <img src="https://firebasestorage.googleapis.com/v0/b/hyubaca-58cec.appspot.com/o/dashboard%2Flogo-episode.png?alt=media&token=e83a1485-bdbb-4703-a4b9-44d610b558d3" alt="logo episode" className='img-fluid px-5' />
                        </picture>
                        <h2 className='text-center'>Episode {epsId}</h2>
                    </div>
                </div>
                <ImagesArray imageList={imageList1} />
                <Question idUser={getUserID} epsId={epsId} getAll={getListAllQuestionDone} />
                <ImagesArray imageList ={imageList2} />
                <Quiz idUser={getUserID} epsId={epsId} getAll={getListAllQuizDone} />
                <div className="d-flex justify-content-center my-5">
                    <Link to='/komik' className='btn btn-navy btn-lg' onClick={scrollToTop}>Kembali ke List Episode</Link>
                </div>
            </section>
            <section>
                <h1 className='ms-3 mb-3'>Komentar</h1>
                <AddComment intEpsParam={intEpsParam} namaPanggil={getNamaPanggil} />
                <Comments commentsList={commentsList} />
            </section>
        </div>
    )
}

export default Episode;