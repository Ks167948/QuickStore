import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import { ThemeProvider } from "@/lib/theme-provider";

import "./globals.css";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Qstore",
  description: "Qstore - The only storage solution you need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        <ThemeProvider
          defaultTheme="system"
          storageKey="qstore-ui-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
