import { Box, Grid, Link, Typography } from "@mui/material";
import { StoreItemProps } from "../models/props/store-item-props";
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import { FontService } from "../services/font/font.service";
import { BootstrapDialogTitle } from "../components/dialog/bootstrap-dialog-title";
import { isValidUrl } from "../services/url/url.service";

export default function StoreItem({ store }: StoreItemProps) {
    const [open, setOpen] = useState(false);
    const handleButtonClick = (openState: boolean) => {
        setOpen(openState);
    };
    const renderStoreLink = (url?: string) => {
        const linkText = '홈페이지 바로가기';

        return (
            url && isValidUrl(url) ?
                <Link
                    target="_blank"
                    // rel="noopener" prevents the new page from being able to access the window.opener property and ensures it runs in a separate process.
                    rel="noopener"
                    href={url}
                    style={{ textDecoration: 'none' }}
                >
                    <Typography
                        gutterBottom
                        flex="none"
                        paddingX="16px"
                        fontSize={FontService.getSmallFontSize()}
                        color="#000"
                    >
                        {linkText}
                    </Typography>
                </Link> :
                <br />
        )
    };

    return (
        <>
            <Box
                component="img"
                height="180px"
                width="180px"
                borderRadius="8px"
                src={store.image}
                onClick={() => handleButtonClick(true)}
            >
            </Box>

            <Dialog
                aria-labelledby="store-item-dialog-title"
                open={open}
                fullWidth={true}
                maxWidth="md"
            >
                <Grid container>
                    <Grid
                        item
                        component="img"
                        xs={6}
                        src={store.image}
                    >
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        display="flex"
                        flexDirection="column"
                    >
                        <BootstrapDialogTitle
                            id="store-item-dialog-title"
                            onClose={() => handleButtonClick(false)}
                            fontSize={FontService.getLargeFontSize()}
                        >
                            {store.name}
                        </BootstrapDialogTitle>
                        <Typography
                            flex={1}
                            gutterBottom
                            paddingX="16px"
                            whiteSpace="pre-wrap"
                            fontSize={FontService.getSmallFontSize()}
                        >
                            {store.description}
                        </Typography>
                        {renderStoreLink(store.url)}
                    </Grid>
                </Grid>
            </Dialog >
        </>
    );
}
