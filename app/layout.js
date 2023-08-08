import StoreProvider from "./context/Store";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mmiri Meter",
  description:
    "Mmiri Meter is a smart water meter that is developed to monitor, collect and make water flow data readily to accessible for consumers via the users mobile devices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primaryColor`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
