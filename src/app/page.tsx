"use client";
import { AppBar, Box, Card, CardContent, CardMedia, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
export default function Home() {

  const pathName = usePathname()


  return (
    <Box sx={{ p: 5 }} position={"relative"}>
      <motion.img
        key={pathName}
        src="/top.jpg" style={{ width: "100%", height: "85vh", borderRadius: "2rem" }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.3 }}
        exit={{ opacity: 0.3 }}
      />
      <p style={{ position: "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)", fontSize: "5vw" }}>逃避行のすゝめ</p>
    </Box>
  )
}
