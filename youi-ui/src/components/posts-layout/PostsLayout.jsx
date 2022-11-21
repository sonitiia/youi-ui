import Post from "./Post";
// import PostContainer from "./PostContainer";

const styles = {
    pin_container: {
        m: "10px",
        p: 0,
        width: "95vw",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 350px)",
        gridAutoRows: "10px",
        justifyContent: "center"
    }
}

const PostsLayout = () => {
    return (
        <div style={styles.pin_container}>
            <Post size="small" />
            <Post size="medium" />
            <Post size="large" />
            <Post size="small" />
            <Post size="medium" />
            <Post size="large" />
            <Post size="small" />
            <Post size="medium" />
            <Post size="large" />
            <Post size="small" />
            <Post size="medium" />
            <Post size="large" />
            <Post size="small" />
            <Post size="medium" />
            <Post size="large" />
            <Post size="small" />
            <Post size="medium" />
            <Post size="large" />
        </div>
    );
};

export default PostsLayout;
