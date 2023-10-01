"use client";
import { AppBar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
export default function member() {

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
        <>
            <motion.div
                key={splashKey}
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0, transitionEnd: {
                        display: "none"
                    }
                }
                }

                transition={{ duration: 2 }}
                style={{ textAlign: "center", width: "100vw", height: "80vh", position: "absolute" }}
            >
                <h1 style={{ position: "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)", fontSize: "5vw" }}>
                    メンバーのすゝめ
                </h1>
            </motion.div>
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

    )
}
