import type { Metadata, Viewport } from "next";
import { Montserrat, Keania_One } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const keaniaOne = Keania_One({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "BOOMINATI | Web Development & Digital Solutions",
  description: "BOOMINATI - Expert web development services for silicone baby websites, pet platforms, tracking systems, e-commerce and custom digital solutions. Built for results.",
  keywords: ["web development", "silicone baby websites", "pet breeder websites", "tracking systems", "e-commerce", "virtual numbers", "graphic design", "SEO", "website builder"],
  authors: [{ name: "BOOMINATI" }],
  openGraph: {
    title: "BOOMINATI | Web Development & Digital Solutions",
    description: "Expert web development services for silicone baby websites, pet platforms, tracking systems, e-commerce and custom digital solutions.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#c9a227",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${keaniaOne.variable} min-h-screen bg-background text-foreground antialiased transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}