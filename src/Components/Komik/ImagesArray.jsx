import React from "react";

const ImagesArray = ({imageList}) => {

    return (
        <div className=''>
            {imageList.map((gambar, index) =>(
            <div key={`gambar${index}s`} className='comic-size d-flex align-items-center flex-column'>
                <img src={gambar} alt={`gambar${index}`} />
            </div>
            ))}
        </div>
    )
}

export default ImagesArray;