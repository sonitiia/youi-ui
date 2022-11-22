import { Box } from "@mui/system";
import { useState } from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";

const CommentList = () => {
    const [comments, setComments] = useState([]);

    const addComment = (comment) => {
        setComments([...comments, comment]);
    };
    return (
        <>
            <AddComment onAdd={addComment} />
            <Box
                sx={{
                    overflowY: "scroll",
                }}>
                {
                    comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))
                }
            </Box >
        </>
    );
}
export default CommentList;