import React, { useState } from "react";

const Comments = ({commentsList}) => {
    const [showAllComments, setShowAllComments] = useState(false);
    const displayedComments = showAllComments ? commentsList : commentsList.slice(0, 3);

    const toggleComments = () => {
        setShowAllComments(!showAllComments);
    };

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <ul className="question-size list-group p-3"> 
                {displayedComments.map((comment) => (
                    <li key={comment.user_id} className="list-group-item">
                        <h4>{comment.user_name}</h4>
                        <span className="mb-1">{comment.user_time.toDate().toDateString()}</span>
                        <p>{comment.user_comment}</p>
                    </li>
                ))}
            </ul>
            {commentsList.length > 3 && 
                <button onClick={toggleComments} className="btn btn-outline-primary mb-5">
                    {showAllComments? 'Sembunyikan komentar' : 'Tampilkan Semua Komentar'}
                </button>
            }
            
        </div>
    )
}

export default Comments;