import type { Metadata } from "next";
import { IBM_Plex_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CockpitFab from "./components/CockpitFab";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Systems Portfolio",
  description:
    "Professional portfolio homepage focused on enterprise automation and rigorous testing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSerif.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CockpitFab />
      </body>
    </html>
  );
}
