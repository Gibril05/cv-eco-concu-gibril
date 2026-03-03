import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV | Ton Prénom Ton Nom",
  description: "Portfolio et CV éco-conçu de [Ton Nom], développeur web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* C'est ici qu'on applique le fond gris clair et le texte sombre ! */}
      <body className="antialiased bg-[#F9FAFB] text-gray-900 selection:bg-teal-300 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}