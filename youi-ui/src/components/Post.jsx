import { ImageListItem, ImageListItemBar } from "@mui/material";
import SaveButton from "./SaveButton";
import UserAndAvatar from "./UserAndAvatar";
import { useState } from "react";

const Post = ({ item }) => {
    const [isSaved, setIsSaved] = useState(false);

    return (
        <ImageListItem key={item.img}>
            <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                    cursor: "pointer",
                    borderRadius: 70,
                }}
            />
            <ImageListItemBar
                sx={{
                    background: 'transparent',
                    color: (theme) => theme.palette.primary.main,
                    px: 1
                }}
                title={<UserAndAvatar></UserAndAvatar>}
                position="below"
                actionIcon={
                    <SaveButton
                        isSaved={isSaved}
                        onChangeSave={(saved) => setIsSaved(saved)}
                        sx={{
                            position: "absolute",
                            bottom: 60,
                            right: 45,
                        }} />
                }
            />
        </ImageListItem>
    );
}

export default Post;