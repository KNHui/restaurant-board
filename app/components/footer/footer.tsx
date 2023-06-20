import { FontService } from "@/app/services/font/font.service";
import { LayoutStyleService } from "@/app/services/layout/layout-size.service";
import { Box, Divider, Link, Typography } from "@mui/material";

export default function Footer() {
    const copyright = '@ 2020';
    const name = '김남희';
    const resumeLink = 'https://accessible-sunstone-63e.notion.site/c546f5b61d554b2f9a6e56d840a90c5a?pvs=4';

    return (
        <Box
            component="footer"
            style={LayoutStyleService.getFooterStyle()}
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
                    target="_blank"
                    // rel="noopener" prevents the new page from being able to access the window.opener property and ensures it runs in a separate process.
                    rel="noopener"
                    color="inherit"
                    href={resumeLink}
                >
                    {name}
                </Link>
            </Typography>
        </Box>
    );
}
