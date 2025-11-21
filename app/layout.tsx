import { GeistSans } from "geist/font/sans";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Future Forest",
  description: "A support portal.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <main className="min-h-screen flex flex-col items-center">
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
