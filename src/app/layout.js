import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";
// import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Scented Candles Store",
  description: "Buy high-quality scented candles online.",
};

export default function RootLayout({ children }) {
  return (
    // <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-100">
          <ErrorBoundary>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ErrorBoundary>
        </body>
      </html>
    // </ClerkProvider>
  );
}
