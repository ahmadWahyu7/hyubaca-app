import { doc, increment, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { db } from "../../Data/firebase";
import dataQuestion from "../../Data/data-questions";

const Question = ({idUser, epsId, getAll}) => {

    //data user ketika pertanyaan selesai
    const listQuestionDone = getAll.find( item => item.id === `questiondone${epsId}`);
    const isQuestionDone = listQuestionDone? listQuestionDone.is_done : null;

    //data pertanyaan dan jawaban
    const getListQuestion = dataQuestion.filter(item => item.question_id === `question${epsId}`);
    const getOptions = getListQuestion.map(item => item.question_options).flat();
    const [options, setOptions] = useState(getOptions);

    const handlePilihan = async (opsi) => {
        const updatedOptions = options.map((option) => ({
            ...option,
                option_disabled: true,
        }));
        setOptions(updatedOptions);

        const updateAllQuestion = getAll.map(item => {
            if (item.id === `questiondone${epsId}`) {
                return {...item, is_done: true};
            }
            return item;
        }).flat();

        const userRef = doc(db, 'pengguna', `${idUser}`);
        try {
            await updateDoc(userRef, {is_question_done : updateAllQuestion});
        } catch (error) {
            console.log(error);
        }
 
        //menambahkan poin jika benar
        if (opsi.is_correct === true) {
            Swal.fire('Jawabanmu Benar!');
            await updateDoc(userRef,{ poin: increment(500) });
        } else {
            Swal.fire('Jawabanmu Salah!');
        }
    };

    return (
        <div className="d-flex justify-content-center text-center p-3">
            {isQuestionDone? (
                <div></div>
            ) : (
                <div className="question-size text-center p-3 shadow">
                    <div className="bg-primary rounded-3 p-3">
                        <h3 className="py-2 px-5 mb-5 text-white fw-bold">Pertanyaan</h3>
                        {getListQuestion.map((item) => (
                            <div key={item.question_id}>
                                <div className="question-text mb-3 bg-white py-5 rounded shadow">{item.question_text}</div>
                            </div>
                        ))}
                        <div className="option-button d-flex flex-column">
                            {options.map((opsi) => (
                                <button 
                                key={opsi.option_id} 
                                type="button" 
                                className="btn btn-navy text-white mb-3" 
                                onClick={()=>handlePilihan(opsi)} 
                                disabled={opsi.option_disabled}>
                                    {opsi.option_text}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default Question;