import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Human Code Technology | Automação Inteligente",
    template: "%s | Human Code Technology",
  },
  description: "Soluções tecnológicas sob medida para empresas que precisam de eficiência real. Automação completa, pensada do zero para os processos que movem o seu negócio.",
  keywords: ["automação", "inteligência artificial", "tecnologia", "consultoria", "empresarial", "automação corporativa", "IA", "transformação digital"],
  authors: [{ name: "Human Code Technology" }],
  creator: "Human Code Technology",
  metadataBase: new URL("https://humancode.com.br"),
  openGraph: {
    title: "Human Code Technology",
    description: "Soluções tecnológicas sob medida para empresas que precisam de eficiência real.",
    type: "website",
    locale: "pt_BR",
    siteName: "Human Code Technology",
    url: "https://humancode.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Code Technology | Automação Inteligente",
    description: "Soluções tecnológicas sob medida para empresas que precisam de eficiência real.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
