import React from "react";

const Question = ({questionList}) => {

    return (
        <div className="d-flex justify-content-center text-center p-3">
            <div className="question-size text-center p-3">
                <div className="border border-primary border-3 rounded-3 p-3">
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
                <h3>Pertanyaan</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nihil quasi voluptate dolorem harum accusantium optio dicta doloribus pariatur numquam?</p>
                <div className="option-button">
                    <button type="button" className="btn btn-outline-primary mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, non?</button>
                    <button type="button" className="btn btn-outline-primary mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, non?</button>
                    <button type="button" className="btn btn-outline-primary mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, non?</button>
                    <button type="button" className="btn btn-outline-primary mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, non?</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Question;