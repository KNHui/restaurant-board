import { Box } from '@mui/material';
import { LayoutSizeService } from "@/app/services/layout/layout-size.service";
import Subheader from '../subheader/subheader';
import { MetadataService } from '@/app/services/metadata/metadata.service';

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
            height={LayoutSizeService.getNestedLayoutHeight()}
        >
            <Box component="title">
                {MetadataService.getTitle(subtitle)}
            </Box>
            <Subheader subtitle={subtitle} ></Subheader>
            <main style={{ height: LayoutSizeService.getNestedLayoutContentHeight() }}>
                {children}
            </main>
        </Box>
    );
}
