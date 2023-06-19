import { Box } from '@mui/material';
import { LayoutSizeService } from "@/app/services/layout/layout-size-service";
import Subheader from '../subheader/subheader';
import { TitleService } from '@/app/services/title/title.service';

export default function NestedLayout({
    subTitle: subtitle,
    children
}: {
    subTitle: string,
    children: React.ReactNode
}) {
    return (
        <Box
            component="div"
            position="relative"
            paddingX={LayoutSizeService.getContainerPadding()}
            height={LayoutSizeService.getBodyHeight()}
        >
            <Box component="title">
                {TitleService.getTitle(subtitle)}
            </Box>
            <Subheader subtitle={subtitle} height={LayoutSizeService.getSubheaderHeight()}></Subheader>
            <main>
                {children}
            </main>
        </Box>
    );
}
