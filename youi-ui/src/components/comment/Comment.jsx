import { Accordion, AccordionDetails, AccordionSummary, Typography, } from "@mui/material";
import UserAndAvatar from "../UserAndAvatar";

const Comment = ({ comment }) => {

    return (
        <Accordion
            elevation={0}
            expanded={true}
            sx={{
                background: "transparent",
            }}
        >
            <AccordionSummary
                sx={{
                    justifySelf: "flex-start",
                    color: (theme) => theme.palette.primary.main
                }}
            >
                <UserAndAvatar />
            </AccordionSummary>
            <AccordionDetails>
                <Typography
                    sx={{
                        color: (theme) => theme.palette.primary.main
                    }}>{comment.description}</Typography>
            </AccordionDetails>
        </Accordion>
    );
}
export default Comment;