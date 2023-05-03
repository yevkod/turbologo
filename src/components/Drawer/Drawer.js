import React from 'react';
import { Box, IconButton, Drawer as MuiDrawer } from "@mui/material";
import Navbar from "../Navbar";
import close from "./../../assets/img/close.svg";

const Drawer = ({open, onClose}) => {
    return (
        <MuiDrawer
            sx={{ width: "100%" }}
            anchor="left"
            open={open}
            onClose={onClose}
        >
            <Box sx={{ padding: "2px" }}>
                <IconButton sx={{ padding: 0, marginLeft: "5px" }} onClick={onClose}>
                    <img src={close} alt="close" />
                </IconButton>
                <Box sx={{ padding: "44px" }}>
                    <Navbar />
                </Box>
            </Box>
        </MuiDrawer>
    );
};

export default Drawer;
