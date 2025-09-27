import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
// import { DefaultSeo } from "next-seo"
// import { defaultSEO } from "@/lib/seo"
const inter = Inter({
  
  subsets: ["latin"],
});

 
export const metadata: Metadata = {
	title: "Creovata — Innovate. Build. Grow.",
	description: "Modern digital solutions: Web, Mobile, AI, B2B services, and training by Creovata.",
	metadataBase: new URL("https://www.creovata.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className }antialiased`}
      >
        {/* <DefaultSeo {...defaultSEO} /> */}
        <Navbar/>
       <main className="min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
