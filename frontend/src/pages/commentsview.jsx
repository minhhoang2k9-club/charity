import { useState, useEffect } from "react";
import './commentsview.css';

function Releasecomments() {
    const [comments, setComments] = useState([]);

    async function getComments() {
        const response = await fetch(
            'http://localhost:3000/api/viewcomments'
        );

        const data = await response.json();

        setComments(data);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getComments();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className='app-container'>
            {comments.map((comment) => (
                <div className='comment-box'>
                    <div className="displayName">
                        {comment.displayname}
                    </div>

                    <div className="comments">
                        {comment.content}
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default Releasecomments;