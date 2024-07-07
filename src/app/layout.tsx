"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.component";
import Footer from "./components/Footer.component";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme.context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html')?.classList.remove("light", "dark")
    document.querySelector('html')?.classList.add(themeMode)
  }, [themeMode])

  return (
    // <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-col items-center w-full">
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </body>
      </html>
    // </ThemeProvider>
  );
}
