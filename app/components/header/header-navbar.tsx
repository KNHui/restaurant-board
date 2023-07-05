import { Box } from "@mui/material";
import { NavigationButton } from "../navigation-button/navigation-button";
import { NavigationButtonProps } from "@/app/models/props/navigation-button-props";

export function Navbar() {
    const navItems: NavigationButtonProps[] = [
        { key: 'About', href: '/about', text: 'About' },
        { key: 'Store', href: '/store', text: 'Store' }
    ];

    return (
        <Box sx={{ display: 'block' }}>
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
