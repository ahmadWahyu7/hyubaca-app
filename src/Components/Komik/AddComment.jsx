import React, { useState } from "react";
import { db } from "../../Data/firebase";
import { Timestamp, arrayUnion, doc, updateDoc } from "firebase/firestore";

import { v4 as uuidv4 } from 'uuid';

const AddComment = ({intEpsParam, namaPanggil}) => {
    const [komentarBaru, setKomentarBaru] = useState('');

    const dataNamaEpisode = [
        {id: 0, nama_eps: "eps00Prolog"},
        {id: 1, nama_eps: "eps01kenalanyuk"},
        {id: 2, nama_eps: "eps02Pemdas"},
        {id: 3, nama_eps: "eps03fungsiStatistik"},
        {id: 4, nama_eps: "eps04IF"},
        {id: 5, nama_eps: "eps05vlookup"},
        {id: 6, nama_eps: "eps06hlookup"},
    ]

    const filterDataNama = dataNamaEpisode.filter( item => item.id === intEpsParam);
    const arrayFilterData = filterDataNama.map(item => [item.id, item.nama_eps]).flat();
    const idFilter = arrayFilterData[0];
    const namaFilter = arrayFilterData[1];

    const listRef = doc(db, "listepisode", `${namaFilter}`)

    const handleAddComment = async (e) => {
        e.preventDefault();

        const uniqueId = uuidv4();
        const currentDate = new Date();

        try {
          await updateDoc(listRef, { comments_eps : arrayUnion({
            user_id : `0${idFilter}user_${uniqueId}`,
            user_name : namaPanggil,
            user_time : Timestamp.fromDate(currentDate),
            user_comment : komentarBaru
            })
          });
          alert('data telah ditambahkan');
        } catch (error) {
          console.log(error)
        }
        setKomentarBaru('');
    }

    return (
        <div className="mb-3">
            <form className="px-3" onSubmit={handleAddComment}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="masukan komentarmu ..." value={komentarBaru} onChange={(e) => setKomentarBaru(e.target.value)} />
                    <label for="floatingInput">Komentar</label>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-navy fw-bold px-5">tambah komentar</button>
                </div>
            </form>
        </div>
    )
}

export default AddComment;