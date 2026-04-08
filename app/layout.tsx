import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Вічна пам'ять — Ритуальні послуги в Ладижині",
    template: "%s | Вічна пам'ять — Ладижин",
  },
  description:
    "Ритуальні послуги в Ладижині. Організація похорон, перевезення тіл по Україні та Європі, похорон онлайн, пам'ятники на замовлення, догляд за могилами. Цілодобово.",
  keywords: [
    "ритуальні послуги Ладижин",
    "похорони Ладижин",
    "похоронне бюро Ладижин",
    "ритуальні послуги",
    "організація похорон Ладижин",
    "труни Ладижин",
    "вінки Ладижин",
    "пам'ятники Ладижин",
    "перевезення тіл Україна",
    "похорон онлайн",
    "догляд за могилами Ладижин",
    "ритуальні товари Ладижин",
    "Вічна пам'ять",
    "похоронне бюро Вінницька область",
  ],
  openGraph: {
    title: "Вічна пам'ять — Ритуальні послуги в Ладижині",
    description:
      "Організація похорон, перевезення тіл, пам'ятники, догляд за могилами. Працюємо цілодобово.",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
