import Link from 'next/link';
import Button from '@mui/material/Button';
import { NavigationButtonProps } from '@/app/models/props/navigation-button-prps';

export function NavigationButton(props: NavigationButtonProps) {
    return (
        <Link
            href={props.href}
        >
            <Button
                variant="text"
                style={{ color: '#000' }}
            >
                {props.text}
            </Button>
        </Link>
    );
}
