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
  title: "Meeche & Boom Co. | Digital Solutions - Marketing + Web Development",
  description: "Meeche & Boom Co. - We get clients, then build their sites. Expert digital solutions combining marketing and web development.",
  keywords: ["web development", "digital agency", "marketing", "silicone baby websites", "pet websites", "e-commerce", "SEO"],
  authors: [{ name: "Meeche & Boom Co." }],
  openGraph: {
    title: "Meeche & Boom Co. | Digital Solutions",
    description: "Marketing + Web Development - We get clients, then build their sites.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Meeche & Boom Co." />
      </head>
      <body className={`${montserrat.variable} ${keaniaOne.variable} min-h-screen bg-background text-foreground antialiased transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}