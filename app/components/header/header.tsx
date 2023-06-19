import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Navbar } from './header-navbar';
import { SectionHeight } from '@/app/models/layout/section-height';
import { Box } from '@mui/material';
import { TitleService } from '@/app/services/title/title.service';

export default function Header(props: SectionHeight) {
    const TITLE = 'AWESOME FOOD STORE';

    return (
        <Box
            component="header"
            style={{ height: props.height }}
        >
            <Toolbar
                component="nav"
                sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Navbar />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: 'block', textAlign: 'right' }}
                >
                    {TitleService.getTitle()}
                </Typography>
            </Toolbar>
        </Box>
    );
}
