import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const baseUrl = process.env.BASE_URL;
export const metadata = {
  metadataBase: new URL(`${baseUrl}`),
  keywords: ["Best Nephrologist in Delhi"],
  title: {
    default: "Best Nephrologist in Delhi - Dr Sunil Prakash",
    template: "%s | Best Nephrologist in Delhi - Dr Sunil Prakash",
  },
  openGraph: {
    description:
      "Visit Dr Sunil Prakash for the best kidney related treatment possible",
    images: [""],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script id="google-analytics-script" async src="https://www.googletagmanager.com/gtag/js?id=G-5L3TQ5E0LF"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5L3TQ5E0LF');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
