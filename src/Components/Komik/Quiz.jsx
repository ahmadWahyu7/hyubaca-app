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
 
    };

    return (
        <div className="d-flex justify-content-center mb-5">
            {isQuizDone? (
                <div></div>
            ): (
                <div>
                    {isQuizStarted ? (
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled >
                            Mulai Kuis
                        </button>
                    ) : (
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={startQuiz} >
                            Mulai Kuis
                        </button>
                    )}
        
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Kuis Matematika</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ea praesentium autem inventore laboriosam magni dolorum ad quas fugit placeat dolor facilis eveniet totam expedita quibusdam molestiae, animi at incidunt hic tempora culpa? Explicabo, perspiciatis repellendus sequi beatae natus, animi fugiat distinctio eligendi dignissimos exercitationem delectus officia! Molestias commodi velit cumque, rem eaque repellat fuga enim aut non tenetur porro libero totam corporis dicta ullam sunt maxime tempore error nesciunt est ea quidem. Nulla ipsa eveniet, non neque accusantium velit labore fuga corrupti sed tempora soluta nobis numquam, nisi omnis ad aspernatur dolores atque iste! Ut laboriosam omnis sit, error et voluptates eligendi porro repudiandae iusto reiciendis libero rem expedita non consectetur perferendis excepturi minus possimus aut sed. Maiores vero at dicta atque alias, quasi nesciunt. Eligendi eius ipsum veritatis, quaerat nihil velit laboriosam harum nostrum optio expedita nam excepturi sed dolore alias commodi sequi nemo fugit ea delectus dolor ad ullam vel incidunt? Excepturi ipsa adipisci repellat perferendis earum reprehenderit. Et aliquam, quia, quae sapiente suscipit, commodi quis magnam necessitatibus recusandae voluptatum consequuntur facilis dicta! Praesentium vero expedita modi enim fuga alias possimus, dignissimos unde deleniti magni odit, et aspernatur quasi facere sunt obcaecati doloremque? Ut reprehenderit asperiores id, soluta ab maiores cum ipsa dolore cupiditate provident accusamus reiciendis sapiente nulla ipsum ducimus, numquam voluptatum iusto dolorum, repellendus illum placeat quae veniam. Magni delectus, nihil totam saepe quam esse in debitis dicta cum. Et, veritatis fugiat! Magnam quidem similique consequatur ab vel temporibus voluptate impedit nemo repudiandae eligendi animi in aut natus nam excepturi esse numquam, nesciunt nihil enim minus libero quam? Esse nisi natus, quaerat voluptates eligendi nulla omnis eos. Odit voluptatem quos ea earum, nostrum saepe, illum itaque quod reiciendis error, dicta eius et quo voluptates modi architecto ipsa quisquam perferendis aspernatur nisi? Accusantium quis quo dolore.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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