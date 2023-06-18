import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Navbar } from './navbar';
import { SectionHeight } from '@/app/models/section-height';

export default function Header(props: SectionHeight) {
    const title = 'AWESOME FOOD STORE';

    return (
        <header
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
                    {title}
                </Typography>
            </Toolbar>
        </header>
    );
}
