import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const SaveButton = ({ isSaved, onChangeSave, ...props }) => {
    const [isActive, setIsActive] = useState(isSaved);

    useEffect(() => {
        onChangeSave(isActive);
    }, [isActive, onChangeSave])


    return (
        <Button
            {...props}
            onClick={() => setIsActive(!isActive)}
            sx={{
                background: (theme) => theme.palette.action.active,
                color: (theme) => theme.palette.secondary.main,
                width: "fit-content",
                borderRadius: 2,
                transition: "transform .5s",
                ":hover": {
                    transform: "scale(1.15)",
                    background: (theme) => theme.palette.primary.main,
                },
                ...props.sx
            }}
        > {isActive ? "saved" : "save"}
        </Button>
    );
}

export default SaveButton;