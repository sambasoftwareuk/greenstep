import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import { Footer } from "./_components/footer";
import WhatsAppStickyButton from "./_components/whatsAppStickyButton";
import ScrollToTopButton from "./_components/ScrollToTopButton";
import { getMetadataForPath } from "./utils/metadataHelper";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
export function generateMetadata() {
  const meta = getMetadataForPath("/");

  return {
    title: meta.title,
    description: meta.description,
    icons: {
      icon: "/gs.svg",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${roboto.variable}  antialiased`}>
        <Navbar />
        <main id="top">{children}</main>
        <Footer />
        <div className="fixed bottom-6 right-6 md:bottom-16 flex items-center gap-4 z-50">
          <WhatsAppStickyButton />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
