import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import ParticlesBackground from "./components/ParticlesBackground";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", // Optional CSS variable
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <ParticlesBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}