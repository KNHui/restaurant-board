import { Box } from "@mui/material";
import { StoreItemProps } from "../models/props/store-item-props";
import { useState } from "react";

export default function StoreItem({ store }: StoreItemProps) {
    const [open, setOpen] = useState(false);
    const handleButtonClick = (openState: boolean) => {
        setOpen(openState);
    };

    return (
        <Box
            component="img"
            height="180px"
            width="180px"
            borderRadius="8px"
            src={store.image}
            onClick={() => handleButtonClick(true)}
        >
        </Box>
    );
}
