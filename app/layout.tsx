import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "@/context/ToasterContext";
import ToasterComponent from "@/components/ui/Providers/toaster";
import Footer from "@/components/Footer";
import { Providers } from "@/components/ui/Providers/providers";
import AuthProvider from "@/components/ui/Providers/authProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "EventKu",
  description: "EventKu - Your Event Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <AuthProvider>
            <ToasterProvider>
              {children}
              <ToasterComponent />
              <Footer />
            </ToasterProvider>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
