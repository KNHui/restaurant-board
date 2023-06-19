import { SubheaderProps } from "@/app/models/props/subheader-props";
import { Box, Typography } from "@mui/material";
import { SubheaderUnederline } from "./subheader-line";
import { LayoutSizeService } from "@/app/services/layout/layout-size.service";

export default function Subheader(props: SubheaderProps) {
    return (
        <Box
            component="header"
            marginBottom={LayoutSizeService.getsubheaderMarginBottom()}
        >
            <Typography
                component="h5"
                variant="h5"
                color="#464ea3"
                fontWeight="bold"
                paddingBottom={LayoutSizeService.getsubheaderPaddingBottom()}
            >
                {props.subtitle}
            </Typography>
            <SubheaderUnederline></SubheaderUnederline>
        </Box>
    );
}
