import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/contacto/page.jsx o app/page.jsx

export const metadata = {
  title: 'Contacto | Ángel Leonardo Maggio - Investigador',
  description: 'Póngase en contacto con Ángel Leonardo Maggio, investigador en estudios migratorios e historia de la comunidad italiana en Argentina. Canales de comunicación oficiales y perfiles académicos.',
  keywords: [
    'Ángel Leonardo Maggio', 
    'Historia', 
    'Estudios migratorios', 
    'Comunidad italiana Argentina', 
    'Investigador CONICET', 
    'UBA Historia'
  ],
  openGraph: {
    title: 'Contacto | Ángel Leonardo Maggio',
    description: 'Perfiles académicos y contacto oficial del historiador Ángel Leonardo Maggio.',
    url: 'https://tusitioweb.com/contacto', // Reemplaza con tu dominio real
    siteName: 'Ángel Leonardo Maggio',
    locale: 'es_AR',
    type: 'profile',
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>

    </html>
  );
}
