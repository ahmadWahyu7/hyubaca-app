import React from "react";
import AddComment from "./AddComment";
import Comments from "./Comments";
import Question from "./Question";
import Quiz from "./Quiz";

const Episode = () => {

    return (
        <div>
            <section>
                <Question />
                <Quiz />
            </section>
            <section>
                <AddComment />
                <Comments />
            </section>
        </div>
    )
}

export default Episode;