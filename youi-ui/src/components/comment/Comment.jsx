import { Accordion, AccordionDetails, AccordionSummary, Typography, } from "@mui/material";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import UserAndAvatar from "../UserAndAvatar";

const Comment = ({ comment }) => {

    return (
        <Accordion
            elevation={0}
            sx={{ background: "transparent" }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreRoundedIcon
                    sx={{
                        justifySelf: "flex-start",
                        color: (theme) => theme.palette.text.contrastText
                    }} />}
                id="comment-show"
            >
                <UserAndAvatar />
            </AccordionSummary>
            <AccordionDetails>
                <Typography
                    sx={{
                        color: (theme) => theme.palette.text.contrastText
                    }}>{comment.description}</Typography>
            </AccordionDetails>
        </Accordion>
    );
}
export default Comment;