"use client";;
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import NestedLayout from "../components/layout/nested-layout";
import { useEffect, useRef, useState } from "react";
import { Store } from "../models/store/store";
import { StoreService } from "../services/server/store.service";
import StoreItem from "./item";

export default function StorePage() {
    const subtitle = 'STORE';
    const [stores, setStores] = useState<Store[]>([]);
    const mounted = useRef(false);

    useEffect(() => {
        !mounted.current &&
            StoreService
                .getStores()
                .then((value) => setStores(value))
                .catch(() => setStores([]))
                .finally(() => mounted.current = true);
    }, []);
    return (
        <NestedLayout subtitle={subtitle} alignContentCenter={true}>
            <Box
                component="div"
                width="1024px"
                minHeight="100%"
                margin="0 auto"
                display="flex"
                justifyContent="center"
                flexDirection="column"
            >
                <Typography
                    component="h4"
                    variant="h4"
                >
                    {subtitle}
                </Typography>
                {
                    mounted.current ?
                        stores.length > 0 ?
                            <Grid
                                container
                                spacing={2}
                                sx={{ marginY: "8px " }}
                            >
                                {
                                    stores.map(store =>
                                        <Grid
                                            item
                                            key={`store-item-${store.id}`}
                                            xs={12 / 5}
                                        >
                                            <StoreItem store={store} />
                                        </Grid>)
                                }
                            </Grid> :
                            <Typography>There is no store.</Typography>
                        :
                        <CircularProgress
                            color="inherit"
                            sx={{ margin: "10vh auto" }}
                        />
                }
            </Box>
        </NestedLayout>
    );
}
