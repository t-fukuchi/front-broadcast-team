"use client";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Home() {

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [])

  const pathName = usePathname()


  return (
    loaded?
    <>
      <motion.img
        key={pathName}
        src="/top.jpg" style={{ objectFit: "none", position:"absolute", top:0, left:0, bottom:0, right: 0, opacity: 0.3, margin:"auto" }}
        initial={{  width: "0%", height: "0%", }}
        animate={{  width: "100%", height: "100%",  }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}

      />
      <motion.p style={{ position: "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)", fontSize: "5vw" }}
        initial={{ opacity: 0, "transform": "translate(-50%, 0%)", }}
        animate={{ opacity: 1, "transform": "translate(-50%, -50%)", }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        逃避行のすゝめ
      </motion.p>
    </>
    :
    <Skeleton animation="wave" variant="rounded" style={{"height": "7.5vh", "width": "30vw", position: "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)"}}/>
  )
}
