"use client";
import { ThemeProvider } from '@emotion/react';
import { AppBar, Box, Toolbar, Typography, createTheme } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Suspense } from 'react';
import './globals.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <head>
        <title>逃避行のすゝめ</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Noto+Serif+JP:wght@300&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider theme={darkTheme}>
          <Box>
            <AppBar component="nav" sx={{ position: "relative" }}>
              <Toolbar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  <Link href="/">逃避行のすゝめ</Link>
                </Typography>
                <Box>
                  <Link href="/">Home</Link>
                  <Link style={{ margin: "0 1rem" }} href="/member">Member</Link>
                </Box>
              </Toolbar>
            </AppBar>
            <AnimatePresence mode="wait">
              <Suspense>
                {children}
              </Suspense>
            </AnimatePresence>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  )
}
