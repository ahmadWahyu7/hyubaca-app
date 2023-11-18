import React, { useState } from "react";

const Comments = ({commentsList}) => {
    const [showAllComments, setShowAllComments] = useState(false);
    const displayedComments = showAllComments ? commentsList : commentsList.slice(0, 3);

    const toggleComments = () => {
        setShowAllComments(!showAllComments);
    };

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="question-size p-3"> 
                {displayedComments.map((comment) => (
                    <div key={comment.user_id} className="border-secondary border-bottom ps-3 pt-3">
                        <h4><b>{comment.user_name}</b></h4>
                        <span><i>{comment.user_time.toDate().toDateString()}</i></span>
                        <p className="mt-3">{comment.user_comment}</p>
                    </div>
                ))}
            </div>
            {commentsList.length > 3 && 
                <button onClick={toggleComments} className="btn btn-outline-primary mb-5">
                    {showAllComments? 'Sembunyikan komentar' : 'Tampilkan Semua Komentar'}
                </button>
            }
            
        </div>
    )
}

export default Comments;