/*
file: main app file
*/
// dependencies
import { Inter } from "next/font/google";
import "@/styles/style.scss";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import type { AppProps } from "next/app";
import { createContext } from "react";
// definig web font in next js for prerendering
const inter = Inter({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
// main app component
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
          font-weight: 400;
        }
      `}</style>
      <Container>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </>
  );
}
