const styles = {
    experience: (theme) => ({
        padding: "44px 20px",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        background: "#F5F5F5",
        [theme.breakpoints.up('sm')]: {
            textAlign: "left",
        },
        [theme.breakpoints.up('lg')]: {
            textAlign: "left",
            padding: "88px 20px",
        },
    }),
    wrapper: {
        maxWidth: "1240px"
    },
    links: (theme) => ({
        flexGrow: 1,
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "240px",
        gap: "20px",
        [theme.breakpoints.up('sm')]: {
            gap: "40px",
            maxWidth: "100%",
        },
    }),
    imgItem: (theme) => ({
        width: "100%",
        marginTop: "24px",
        maxWidth: "402px",
        [theme.breakpoints.up('sm')]: {
            gap: "40px",
            marginTop: "44px",
        },
    }),
    contentTitle: (theme) => ({
        fontSize: "14px",
        lineHeigth: "17px",
        marginTop: "12px",
        maxWidth: "402px",
        textAlign: "left",
        margin: "12px auto 0",
        ...theme.typography.someStyle,
        [theme.breakpoints.up('sm')]: {
            fontSize: "24px",
            lineHeight: "29px",
        },
    }),
}

export default styles;
