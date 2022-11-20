import { Card } from "@mui/material";
import Sunset from "../../img/sunset.jpg";

const styles = {
    pin: {
        margin: "10px",
        paddingBottom: "20px",
        borderRadius: "16px",
        height: "auto",
        backgroundImage: `url(${Sunset})`,
        backgroundSize: "cover",
        // backgroundPosition: "center"
    },
    small: {
        gridRowEnd: "span 25"

    },
    medium: {
        gridRowEnd: "span 35"
    },
    large: {
        gridRowEnd: "span 45"
    },
}

const Post = (props) => {
    return (
        <Card elevation={0}
            sx={{
                ...styles.pin,
                ...styles[props.size],
                m: "10px",
                p: 0,
                borderRadius: "28px",
            }}>
        </Card>
    );
};

export default Post;