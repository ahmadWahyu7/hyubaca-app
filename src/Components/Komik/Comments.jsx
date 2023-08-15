import React from "react";

const Comments = ({commentsList}) => {

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <ul className="question-size list-group p-3"> 
                {commentsList.map((comment) => (
                    <li key={comment.user_id} className="list-group-item">
                        <h4>{comment.user_name}</h4>
                        <span className="mb-1">{comment.user_time.toDate().toDateString()}</span>
                        <p>{comment.user_comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Comments;