import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./components/Providers";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reels-Social",
  description: "Learn Auth.js and other framwork and technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="container mx-auto px-4 w-full h-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}