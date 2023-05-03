import React from 'react';
import Box from "@mui/material/Box";
import styles from "./styles";
import {TextareaAutosize, TextField} from "@mui/material";
import Button from "../Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {useFormik} from "formik";
import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    fullName: yup.string().required("Name is required"),
    message: yup.string().min(20, "to short"),
});

const FormComponent = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            fullName: "",
            message: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(
                `email:${values.email}  |  name:${values.fullName}  |  message:${values.message}`
            );
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={styles.input}>
                <TextField
                    placeholder="Full name"
                    id="fullName"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                    inputProps={{ style: { fontSize: "16px" } }}
                    helperText={
                        formik.touched.fullName && formik.errors.fullName
                            ? formik.touched.fullName && formik.errors.fullName
                            : " "
                    }
                    sx={styles.textField}
                />
                <TextField
                    placeholder="Email address"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    inputProps={{ style: { fontSize: "16px" } }}
                    helperText={
                        formik.touched.email && formik.errors.email
                            ? formik.touched.email && formik.errors.email
                            : " "
                    }
                    sx={styles.textField}
                />
            </Box>
            <TextareaAutosize
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={
                    formik.touched.message && formik.errors.message
                        ? formik.touched.message && formik.errors.message
                        : " "
                }
                minRows={6}
                placeholder="write message"
                style={styles.textareaAutosize}
            />
            <Button type={"submit"}>
                send us message <ArrowForwardIosIcon />
            </Button>
        </form>
    );
};

export default FormComponent;
