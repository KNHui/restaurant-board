"use client";;
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import NestedLayout from "../components/layout/nested-layout";
import { useEffect, useRef, useState } from "react";
import { Store } from "../models/store/store";
import { MetadataService } from "../services/metadata/metadata.service";
import { StoreService } from "../services/server/store.service";

export default function StorePage() {
    const [stores, setStores] = useState<Store[]>([]);
    const mounted = useRef(false);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            StoreService
                .getStores()
                .then((value) => setStores(value));
        }
    }, []);
    return (
        <NestedLayout subtitle="STORE" alignContentCenter={true}>
            <Box
                component="div"
                width="1024px"
                minHeight="100%"
                margin="0 auto"
                display="flex"
                justifyContent="center"
                flexDirection="column"
            >
                <Typography component="h4"
                    variant="h4"
                    color="#464ea3"
                >
                    {MetadataService.getTitle()}
                </Typography>
                {
                    mounted.current ?
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
                                        <Box
                                            component="img"
                                            height="180px"
                                            width="180px"
                                            src={store.image}
                                        >

                                        </Box>
                                    </Grid>)
                            }
                            <Grid item xs={4}>
                            </Grid>
                        </Grid>
                        : <CircularProgress
                            color="inherit"
                            sx={{ margin: "10vh auto" }}
                        />
                }
            </Box>
        </NestedLayout>
    );
}
