import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from '../../Data/firebase';
import Swal from 'sweetalert2';
import { onAuthStateChanged } from 'firebase/auth';

const LihatEnding = () => {
    const [isAllDone, setIsAllDone] = useState(false);
    const penggunaRef = collection(db, 'pengguna');

    useEffect(() => {
        const handleEnding = async () => {
            const data = await getDocs(penggunaRef);
            const getListPengguna = (data.docs.map((doc) => ({...doc.data(), id: doc.id})));

            //cek status log in user
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const userEmail = user.email;
                    const getUser = getListPengguna?.filter( item => item.email === userEmail) || '';
                    const getQuizDone = getUser.map(item => {return item.is_quiz_done}).flat();
                    const countQuizDone = getQuizDone.filter(item => item.is_done === true).length;

                    if (countQuizDone === 7) {
                        setIsAllDone(true);
                    }

                } else {
                    Swal.fire('Anda telah Log Out');
                }
            });            
        };
        handleEnding();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div>
            {isAllDone? (
                <div className='text-center mt-5'>Wih udah semua nih</div>
            ) : (
                <div className='text-center mt-5'>BELOM DIKERJAIN SEMUA KUISNYA</div>
            )}
        </div>
    );
};

export default LihatEnding;