import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Navbar } from './navbar';

export default function Header() {
    const title = 'AWESOME FOOD STORE';

    return (
        <header>
            <Toolbar component="nav" sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
