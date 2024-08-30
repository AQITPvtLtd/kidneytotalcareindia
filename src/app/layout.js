import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header/Header";

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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
