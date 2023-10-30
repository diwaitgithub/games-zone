import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/ui/features/theme-provider";
import Navbar from "@/ui/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Games Zone",
  description: "Book your game slots",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} py-2 md:py-5 px-2 md:px-24 bg-gray-200 dark:bg-gray-900 flex min-h-screen flex-col items-center justify-start gap-2 md:gap-3`}
      >
        <>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {/* container */}
            <div className="z-0 w-full min-h-screen p-4 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-md animate-init-bounce">
              {children}
            </div>
          </ThemeProvider>
        </>
      </body>
    </html>
  );
}
