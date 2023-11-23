import React, { useState } from "react";
import { db } from "../../Data/firebase";
import { doc, updateDoc } from "firebase/firestore";

const Quiz = ({ idUser, epsId, getAll }) => {

    //data user ketika pertanyaan selesai
    const listQuizDone = getAll.find( item => item.id === `quizdone${epsId}`);
    const isQuizDone = listQuizDone? listQuizDone.is_done : null;

    const [isQuizStarted, setIsQuizStarted] = useState(false);
    
    const startQuiz = async () => {
        setIsQuizStarted(true);

        // update array user
        const updateAllQuiz = getAll.map(item => {
            if (item.id === `quizdone${epsId}`) {
                return {...item, is_done: true};
            }
            return item;
        }).flat();

        const userRef = doc(db, 'pengguna', `${idUser}`);

        try {
            await updateDoc(userRef, {is_quiz_done : updateAllQuiz});
        } catch (error) {
            console.log(error);
        }

        //menambahkan poin jika benar
        // if (opsi.is_correct === true) {
        //     Swal.fire('Jawabanmu Benar!');
        //     await updateDoc(userRef,{ poin: increment(1000) });
        // } else {
        //     Swal.fire('Jawabanmu Salah!');
        // }
    };

    return (
        <div className="d-flex justify-content-center mb-5">
            {isQuizDone? (
                <div></div>
            ): (
                <div>
                    {isQuizStarted ? (
                        <button type="button" 
                            className="btn btn-primary"
                            data-bs-toggle="modal" 
                            data-bs-target="#staticBackdrop" 
                            disabled >
                                Kuis Selesai
                        </button>
                    ) : (
                        <button type="button" 
                            className="btn btn-primary" 
                            data-bs-toggle="modal" 
                            data-bs-target="#staticBackdrop" 
                            onClick={startQuiz} >
                                Mulai Kuis
                        </button>
                    )}
        
                    {/* Modal */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Kuis Matematika</h1>
                        </div>
                        <div className="modal-body">
                            soal soal
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Kirim</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Quiz;