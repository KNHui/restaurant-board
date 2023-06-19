import { SubheaderProps } from "@/app/models/subheader-props";
import { Box, Typography } from "@mui/material";
import { SubheaderUnederline } from "./subheader-line";
import { LayoutSizeService } from "@/app/services/layout/layout-size-service";

export default function Subheader(props: SubheaderProps) {


    return (
        <Box
            component="header"
            style={{ height: props.height }}
        >
            <Typography
                component="p"
                marginBottom={LayoutSizeService.getContainerPadding()}
            >
                {props.subtitle}

            </Typography>
            <SubheaderUnederline></SubheaderUnederline>
        </Box>
    );
}
