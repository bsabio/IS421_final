import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import CockpitFab from "./components/CockpitFab";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${ibmPlexSerif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <CockpitFab />
      </body>
    </html>
  );
}
