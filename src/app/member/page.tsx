"use client";
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Skeleton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function member() {

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, [])

    const members = [
        { "name": "ゾウレオ", "src": "/zoureo.webp" },
        { "name": "だいこん", "src": "/daikon.webp" },
        { "name": "KIN", "src": "/kinend.webp" },
        { "name": "梅子", "src": "/umeko.webp" },
        { "name": "よみ", "src": "/yomi.jpg" },
    ]

    const splashKey = usePathname() + "splash";
    const mainScreenKey = usePathname() + "mainsc";

    return (
        loaded ?
            <>
                <motion.div
                    key={mainScreenKey}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ width: "100vw", height: "80vh", position: "absolute" }}
                    transition={{ duration: 1 }}
                >
                    <Box sx={{ p: 5 }}>
                        <h1 style={{ marginBottom: "3rem" }}>メンバーのすゝめ</h1>
                        <Grid container spacing={2}>

                            {
                                members.map((v, i) => {
                                    return (
                                        <Grid item key={i} xs={12} sm={6} md={4} lg={3} xl={2}>
                                            <Card >
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="140"
                                                        image={v["src"]}
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {v["name"]}
                                                        </Typography>
                                                        {/* <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography> */}
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    {/* <Button size="small" color="primary">
                                        Share
                                    </Button> */}
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    );
                                })
                            }
                        </Grid>

                    </Box>
                </motion.div>

            </>
            :
            <div style={{ width: "100vw", height: "80vh", position: "absolute" }}>
                <Box sx={{ p: 5 }}>
                    <h1 style={{ marginBottom: "3rem" }}>メンバーのすゝめ</h1>
                    <Grid container spacing={2}>
                        {
                            members.map((v, i) => {
                                return (
                                    <Grid item key={i} xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <Skeleton animation="wave" variant="rounded" height={200} />
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                </Box>
            </div>

    )
}
