import theme from "../../theme";

const styles = {
    card: (theme) => ({
        border: `0.5px solid ${theme.palette.stateBlue.main}`,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        padding: "44px",
        width: "403px",
        boxSizing: "border-box",
        [theme.breakpoints.up('md')]: {
            maxWidth: "403px",
        }
    }),
    btn: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "20px",
        textDecorationLine: "underline",
        textTransform: "capitalize",
        color: theme.palette.stateBlue.main,
    },
    listItem: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "20px",
        textTransform: "capitalize",
        color: theme.palette.primary.main,
        padding: "12px 0"
    }
}

export default styles;
