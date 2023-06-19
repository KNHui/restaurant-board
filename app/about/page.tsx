"use client";;
import { Box, Typography } from "@mui/material";
import NestedLayout from "../components/layout/nested-layout";
import { MetadataService } from "../services/metadata/metadata.service";
import { FontService } from "../services/font/font.service";

export default function About() {
    return (
        <NestedLayout subTitle="ABOUT" >
            <Box
                component="div"
                textAlign="center"
                display="flex"
                justifyContent="center"
                flexDirection="column"
                height="100%"
            >
                <Typography
                    component="h4"
                    variant="h4"
                    color="#464ea3"
                >
                    {MetadataService.getTitle()}
                </Typography>
                <Typography
                    component="p"
                    marginTop={FontService.getTextMarginTop()}
                    fontSize={FontService.getMiddleFontSize()}
                >
                    {MetadataService.getDescription()}
                </Typography>
            </Box>
        </NestedLayout>
    );
}
