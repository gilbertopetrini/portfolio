import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  display: 'swap',
})

export const metadata = {
  title: "ptrn",
  description: "Portifólio de Gilberto Petrini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
