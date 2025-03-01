import type { Metadata } from "next";
import {
    Geist,
    Geist_Mono,
    JetBrains_Mono,
    Space_Mono,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
    weight: ["700"],
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

const spaceMono = Space_Mono({
    weight: ["400", "700"],
    variable: "--font-space-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Godeff",
    description: "This is my web dev porfolio ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable} ${spaceMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
