import { Box } from "@mui/material";
import styles from "./subheader.module.css";

export function SubheaderUnederline() {
    const renderUnderlines = () => {
        const underlineParts = new Array(3).fill(undefined);
        const getunderlinePartKey = (index: number) => `subheader-underline-${index}`;

        return underlineParts.map((_, index) => (<div
            key={getunderlinePartKey(index)}
            className={styles[getunderlinePartKey(index)]}
        />));
    };

    return (
        <Box
            component="div"
            className={styles['subheader-underline-container']}
        >
            {renderUnderlines()}
        </Box>
    )
}
