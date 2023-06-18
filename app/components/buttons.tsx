import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="text" disabled>Disabled Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>Disabled Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="outlined" disabled>Disabled Outlined</Button>
        </Stack>
    );
}
