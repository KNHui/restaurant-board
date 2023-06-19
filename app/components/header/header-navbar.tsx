import { Box } from "@mui/material";
import { NavigationButton } from "../navigation-button/navigation-button";
import { NavigationButtonProps } from "@/app/models/props/navigation-button-prps";

export function Navbar() {
    const navItems: NavigationButtonProps[] = [
        { key: 'About', href: '/about', text: 'About' },
        { key: 'Store', href: '/eat', text: 'Store' }
    ];

    return (
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(
                (item) =>
                    <NavigationButton
                        key={item.key}
                        href={item.href}
                        text={item.text}
                    />
            )}
        </Box>
    );
}
