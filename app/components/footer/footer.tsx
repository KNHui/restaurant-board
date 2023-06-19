import { FontService } from "@/app/services/font/font.service";
import { LayoutSizeService } from "@/app/services/layout/layout-size.service";
import { Box, Divider, Link, Typography } from "@mui/material";

export default function Footer() {
    const copyright = '@ 2020';
    const name = '김남희';
    const resumeLink = "https://www.notion.so/c546f5b61d554b2f9a6e56d840a90c5a?pvs=4";

    return (
        <Box
            component="footer"
            paddingX={LayoutSizeService.getContainerPadding()}
        >
            <Divider />
            <Typography
                variant="body2"
                color="textSecondary"
                align="left"
                marginTop={FontService.getTextMarginTop()}
                fontSize={FontService.getSmallFontSize()}
            >
                {copyright}{' '}
                <Link
                    target="blank"
                    color="inherit"
                    href={resumeLink}
                >
                    {name}
                </Link>
            </Typography>
        </Box>
    );
}
