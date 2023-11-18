import { doc, increment, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { db } from "../../Data/firebase";

const Question = ({questionList, idUser}) => {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        const getOpsi = async () => {
            const data = await questionList?.map(item => item.question_options).flat() || [];
            setOptions(data);
        }
        getOpsi();
        // eslint-disable-next-line
    }, []);

    const handlePilihan = async (opsi) => {
        const updatedOptions = options.map((option) => ({
            ...option,
            is_disabled: true,
        }));

        setOptions(updatedOptions);

        const userRef = doc(db, 'pengguna', `${idUser}`);

        //menambahkan poin jika benar
        if (opsi.is_correct === true) {
            Swal.fire('Jawabanmu Benar!');
            await updateDoc(userRef,{ poin: increment(100) });
        } else {
            Swal.fire('Jawabanmu Salah!');
        }
    };

    return (
        <div className="d-flex justify-content-center text-center p-3">
            <div className="question-size text-center p-3">
                <div className="bg-primary rounded-3 p-3">
                    <h3 className="py-2 px-5 mb-5 text-white fw-bold">Pertanyaan</h3>
                    {questionList.map((item) => (
                        <div className="question-text mb-3 bg-white py-5 rounded shadow" key={item.question_id}>{item.question_text}</div>
                    ))}
                    <div className="option-button d-flex flex-column">
                        {options.map((opsi) => (
                            <button 
                            key={opsi.id_jawaban} 
                            type="button" 
                            className="btn btn-navy text-white mb-3" 
                            onClick={()=>handlePilihan(opsi)} 
                            disabled={opsi.is_disabled}>
                                {opsi.text_jawaban}
                            </button>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Question;