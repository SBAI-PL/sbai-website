import { Manrope } from "next/font/google";
import { siteMetadata } from "./metadata";
import "./globals.css";

const sans = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});
export const metadata = siteMetadata("pl");
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
