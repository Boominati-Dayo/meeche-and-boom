import type { Metadata, Viewport } from "next";
import { Montserrat, Keania_One } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";

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
  description: "We get clients, then build their sites. Expert digital solutions combining marketing and web development.",
  keywords: ["web development", "digital agency", "marketing", "silicone baby websites", "pet websites", "e-commerce", "SEO", "Cameroon"],
  authors: [{ name: "Meeche & Boom Co." }],
  creator: "Meeche & Boom Co.",
  publisher: "Meeche & Boom Co.",
  openGraph: {
    title: "Meeche & Boom Co. | Digital Solutions",
    description: "We get clients, then build their sites. Expert digital solutions combining marketing and web development.",
    url: "https://meeche-and-boom.vercel.app",
    siteName: "Meeche & Boom Co.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1747052000/og-default.png",
        width: 1200,
        height: 630,
        alt: "Meeche & Boom Co.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meeche & Boom Co. | Digital Solutions",
    description: "We get clients, then build their sites. Expert digital solutions combining marketing and web development.",
    site: "@meecheandboom",
    creator: "@meecheandboom",
    images: ["https://res.cloudinary.com/dmwqqfeyq/image/upload/v1747052000/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
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
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}