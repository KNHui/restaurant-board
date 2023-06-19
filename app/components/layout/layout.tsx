import { Box } from "@mui/material";
import Footer from "../footer/footer";
import { SectionHeight } from "@/app/models/section-height";

export default function Layout(props: SectionHeight) {
    return (
        <Box
            component="div"
            position={'relative'}
            height={props.height}
        >
            <header>Sub Header</header>
            <main>
                Body
            </main>
            <Footer />
        </Box>
    );
}
