import { DialogTitleProps } from "@mui/material/DialogTitle/DialogTitle";

export interface BootstrapDialogTitleProps extends DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}
