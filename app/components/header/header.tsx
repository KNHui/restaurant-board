import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Navbar } from './header-navbar';
import { SectionHeight } from '@/app/models/layout/section-height.model';
import { Box } from '@mui/material';
import { MetadataService } from '@/app/services/metadata/metadata.service';

export default function Header(props: SectionHeight) {
    return (
        <Box
            component="header"
            height={props.height}
        >
            <Toolbar
                component="nav"
                sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Navbar />
                <Typography
                    variant="h6"
                    component="h6"
                    flexGrow="1"
                    display="block"
                    textAlign="right"
                    fontWeight="bold"
                    color="#464ea3"
                >
                    {MetadataService.getTitle()}
                </Typography>
            </Toolbar>
        </Box>
    );
}
