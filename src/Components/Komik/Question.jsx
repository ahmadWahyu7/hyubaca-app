import React from "react";

const Question = ({questionList}) => {

    return (
        <div className="d-flex justify-content-center text-center p-3">
            <div className="question-size text-center p-3">
                <div className="bg-primary rounded-3 p-3">
                {/* {filterQuestion.map((soal) => (
                    <div key={soal.id} className="card">
                        <h3 className="card-header">Pertanyaan DADAKAN!!</h3>
                        <div className="card-body">
                        <h5 className="card-title">{soal.question}</h5>
                        <p className="card-text">hati-hati dalam menjawab soal!</p>
                        {soal.answer.map((jawab) => (
                            <a href="/" key={jawab.id} className="d-flex btn btn-primary mb-3">{jawab.pilihan}</a>
                        ))}
                        </div>
                    </div>
                ))} */}
                <h3 className="py-2 px-5 bg-white shadow mb-5">Pertanyaan</h3>
                <p className="text-white mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nihil quasi voluptate dolorem harum accusantium optio dicta doloribus pariatur numquam?</p>
                <div className="option-button">
                    <button type="button" className="btn btn-navy text-white mb-2">Lorem ipsum dolor sit amet.</button>
                    <button type="button" className="btn btn-navy text-white mb-2">Lorem ipsum dolor sit amet.</button>
                    <button type="button" className="btn btn-navy text-white mb-2">Lorem ipsum dolor sit amet.</button>
                    <button type="button" className="btn btn-navy text-white mb-2">Lorem ipsum dolor sit amet.</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Question;