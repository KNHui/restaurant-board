"use client";

import { Box } from "@mui/material";
import NestedLayout from "../components/layout/nested-layout";

export default function Store() {
    return (
        <NestedLayout subtitle="STORE" alignContentCenter={true}>
            <Box
                component="div"
                width="1024px"
                minHeight="100%"
                margin="0 auto"
                display="flex"
                justifyContent="center"
                flexDirection="column"
            >
                /app/store/page.tsx
            </Box>
        </NestedLayout>
    );
}
