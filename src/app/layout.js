import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "Devansh's portfolio",
  description: "A web developer providing freelancing services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-forground font-Inter")}>
        {children}
        <FireFliesBackground />
        <Sound />
      </body>
    </html>
  );
}
