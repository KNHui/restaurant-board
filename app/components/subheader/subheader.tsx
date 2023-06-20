import { SubheaderProps } from "@/app/models/props/subheader-props";
import { Box, Typography } from "@mui/material";
import { SubheaderUnederline } from "./subheader-line";
import { NestedLayoutSizeService } from "@/app/services/layout/nested-layout-size.service";

export default function Subheader(props: SubheaderProps) {
    return (
        <Box
            component="header"
            marginBottom={NestedLayoutSizeService.getSubheaderMarginBottom()}
        >
            <Typography
                component="h5"
                variant="h5"
                color="#464ea3"
                fontWeight="bold"
                paddingBottom={NestedLayoutSizeService.getSubheaderPaddingBottom()}
            >
                {props.subtitle}
            </Typography>
            <SubheaderUnederline></SubheaderUnederline>
        </Box>
    );
}
