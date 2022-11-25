import { Box } from "@mui/system";
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <Box>
            {" "}
            {showTopBtn && (
                <KeyboardArrowUpRoundedIcon
                    className="icon-position icon-style"
                    onClick={goToTop}
                    sx={{
                        position: "fixed",
                        bottom: "40px",
                        right: "25px",
                        zIndex: 999,
                        backgroundColor: (theme) => theme.palette.primary.main,
                        border: "none",
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        color: "#fff",
                        cursor: "pointer",
                        transition: "all .5s ease-in-out"
                    }}
                />
            )}{" "}
        </Box>
    );
};
export default ScrollToTop;