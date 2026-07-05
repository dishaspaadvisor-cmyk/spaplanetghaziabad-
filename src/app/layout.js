import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Best Spa in Ghaziabad 201001 | Luxury Relaxation",
  description:
    "Experience the ultimate relaxation at our luxury spa in Ghaziabad (201001). We offer body massages, facials, and wellness treatments. Book your session today!",
  keywords: [
    "spa in Ghaziabad",
    "body massage in 201001",
    "luxury spa Ghaziabad",
    "massage center near me",
  ],
  authors: [{ name: "Your Spa Name" }],

  icons: {
    icon: "/logo/icon.png",       // or "/logo.png"
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}