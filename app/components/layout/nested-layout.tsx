import { Box } from '@mui/material';
import Subheader from '../subheader/subheader';
import { MetadataService } from '@/app/services/metadata/metadata.service';
import { NestedLayoutProps } from '@/app/models/props/nested-layout-props';
import { NestedLayoutStyleService } from '@/app/services/layout/nested-layout-style.service';

export default function NestedLayout({ subtitle, alignContentCenter, children }: NestedLayoutProps) {
    return (
        <Box
            component="div"
            display="flex"
            flexDirection="column"
            style={NestedLayoutStyleService.getParentStyle()}
        >
            <Box component="title">
                {MetadataService.getTitle(subtitle)}
            </Box>
            <Subheader subtitle={subtitle} ></Subheader>
            <main style={NestedLayoutStyleService.getContainerStyle(alignContentCenter)}>
                {children}
            </main>
        </Box >
    );
}
