import { Box, Button } from "@mui/material";

export function Navbar() {
    const navItems = ['About', 'Store'];

    return (
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
                <Button key={item} sx={{ color: 'green' }}>
                    {item}
                </Button>
            ))}
        </Box>
    );
}
