import React from 'react';
import styles from './styles';
import { Link } from "@mui/material";
import {NavLink} from "react-router-dom";
import BasicMenu from "./DropDown";

const BtnNav = ({page}) => {
    console.log('page',page)
    return (
        <>
            {page.arrow ? (
                <BasicMenu page={page}/>
            ) : (
                <Link
                    component={NavLink}
                    to={page.path}
                    sx={styles.btnLink}
                    style={({isActive}) =>
                        isActive ? {color: "#777FEB"} : undefined
                }
                >
                    {page.title}
                </Link>
            )}
        </>
    );
};

export default BtnNav;
