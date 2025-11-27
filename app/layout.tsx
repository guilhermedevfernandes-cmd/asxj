
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? "http://localhost:3000"),
  title: "AS&ASJ - Excelência e Desempenho em Cada Diamante",
  description: "Distribuidora de diamantes industriais e superabrasivos com mais de 40 anos de experiência. Soluções em abrasivos de ligação resinóide, metálica, micron, naturais e PCD/PDC.",
  keywords: ["diamantes industriais", "superabrasivos", "abrasivos", "resin bond", "metal bond", "micron", "PCD", "PDC", "ferramentas diamantadas"],
  authors: [{ name: "AS&ASJ" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: "AS&ASJ - Excelência e Desempenho em Cada Diamante",
    description: "Distribuidora de diamantes industriais e superabrasivos com mais de 40 anos de experiência.",
    siteName: "AS&ASJ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AS&ASJ Industrial Abrasives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AS&ASJ - Excelência e Desempenho em Cada Diamante",
    description: "Distribuidora de diamantes industriais e superabrasivos com mais de 40 anos de experiência.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/Favicon.webp",
    shortcut: "/Favicon.webp",
    apple: "/Favicon.webp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "AS&ASJ",
              "description": "Distribuidora de diamantes industriais e superabrasivos",
              "foundingDate": "1981",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-99-9999-9998",
                "email": "contato@asasj.com.br",
                "contactType": "customer service"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
