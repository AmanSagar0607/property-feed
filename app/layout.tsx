import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Inter } from 'next/font/google';
import "@/styles/globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Mansio | Luxury Property Marketplace",
  description: "Discover exceptional properties in our immersive property feed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-background font-sans antialiased" suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}