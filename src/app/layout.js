import "./globals.css";

export const metadata = {
  title: "Insight Data Analisys",
  description:
    "Analista de Dados especialista em Excel e Power BI, criando dashboards interativos e relatórios inteligentes para tomadas de decisão rápidas.",
  authors: [
    {
      name: "Dieyson",
      url: "https://www.linkedin.com/in/dieyson-azevedo-54370319a/",
    },
  ],
  keywords: [
    "Insight Data Analisys",
    "Excel",
    "Power BI",
    "Dashboard",
    "BI",
    "Análise de Dados",
    "Análise de Mercado e Estudo de Cenários",
  ],
  openGraph: {
    type: "website",
    title: "Insight Data Analisys",
    description:
      "Analista de Dados especialista em Excel e Power BI, criando dashboards interativos e relatórios inteligentes.",
    url: "https://seu-portfolio.com",
    siteName: "Portfólio Dieyson",
    images: [
      {
        url: "https://seu-portfolio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Insight Data Analisys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insight Data Analisys",
    description:
      "Analista de Dados especialista em Excel e Power BI, criando dashboards interativos e relatórios inteligentes.",
    images: ["https://seu-portfolio.com/og-image.png"],
    creator: "@dieyson",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
