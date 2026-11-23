import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/lexend-deca";
import "@fontsource-variable/lora";
import "@fontsource/poppins/latin-300.css";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sofá Novo de Novo | Higienização, limpeza e blindagem em Curitiba",
  description: "Higienização, limpeza e blindagem de estofados em Curitiba. Conheça os serviços da Sofá Novo de Novo e solicite um orçamento pelo WhatsApp.",
  robots: { index: false, follow: false },
  icons: { icon: "/brand/logo.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
