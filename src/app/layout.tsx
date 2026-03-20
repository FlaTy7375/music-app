import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "./store/StoreProvider";

export const metadata: Metadata = {
  title: "Music App",
  description: "Веб приложение для прослушивания музыки",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="ru">
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
