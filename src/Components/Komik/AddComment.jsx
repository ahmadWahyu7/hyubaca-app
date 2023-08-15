import React, { useState } from "react";
import { db } from "../../Data/firebase";
import { Timestamp, arrayUnion, doc, updateDoc } from "firebase/firestore";

import { v4 as uuidv4 } from 'uuid';

const AddComment = ({intEpsParam}) => {
    const [komentarBaru, setKomentarBaru] = useState('');
    const [namaKomentarBaru, setNamaKomentarBaru] = useState('');

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
            user_name : namaKomentarBaru,
            user_time : Timestamp.fromDate(currentDate),
            user_comment : komentarBaru
          })
           });
          alert('data telah ditambahkan');
        } catch (error) {
          console.log(error)
        }
        setKomentarBaru('');
        setNamaKomentarBaru('');
    }

    return (
        <div className="mb-3">
            <section className="d-flex justify-content-center">
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Tambahkan Komentar Baru
                </button>

                {/* Modal */}
                <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Tambah Komentar</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <label htmlFor="inputNamaKomentar" className="form-label">Nama</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="inputNamaKomentar" 
                            aria-describedby="input nama komentar"
                            value={namaKomentarBaru}
                            onChange={(e)=> setNamaKomentarBaru(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputIsiKomentar" className="form-label">Komentar</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="inputIsiKomentar" 
                            aria-describedby="input komentar baru"
                            value={komentarBaru}
                            onChange={(e) => setKomentarBaru(e.target.value)}
                            />
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">tutup</button>
                        <button type="button" className="btn btn-primary" onClick={handleAddComment} data-bs-dismiss="modal">Kirim</button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default AddComment;