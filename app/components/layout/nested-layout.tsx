import { Box } from '@mui/material';
import { LayoutHeightService } from "@/app/services/layout/layout-service";

export default function NestedLayout({
    subTitle,
    children
}: {
    subTitle: string,
    children: React.ReactNode
}) {
    return (
        <Box
            component="div"
            position={'relative'}
            height={LayoutHeightService.getBodyHeight()}
        >
            <header>subTitle</header>
            <main>
                {children}
            </main>
        </Box>
    );
}
