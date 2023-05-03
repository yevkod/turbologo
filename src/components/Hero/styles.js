const styles = {
    appBar: (theme) => ({
        background: "#fff",
        boxShadow: "none",
        [theme.breakpoints.up('lg')]: {
            borderBottom: "0.5 solid #777FEB",
            padding: "20px 0",
            margin: "auto",
            maxWidth: "1240px",
        },
    }),
    container: (theme) => ({
        [theme.breakpoints.up('lg')]: {
            padding: "20px 0",
            margin: "auto",
        },
    }),
    logoDesk: {
        mr: 2,
        display: {xs: "none", lg: "flex"},
        flexGrow: 1,
    },
    logoMob: {
        mr: 2,
        display: {xs: "flex", lg: "none"},
        flexGrow: 1,
    },
}

export default styles;