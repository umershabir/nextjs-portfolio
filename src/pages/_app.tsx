/*
file: main app file
*/
// dependencies
import { useState } from "react";
import { Inter } from "next/font/google";
import "@/styles/index.scss";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import type { AppProps } from "next/app";
import { ContextProvider } from "@/components/ContextAPI";
// creating context for theming,
// definig web font in next js for prerendering
// const inter = Inter({
//   weight: ["400", "500", "600", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
// });
// main app component
export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>("Dark");
  const themeUpdate: any = () => {
    setTheme((prev) => (prev == "Dark" ? "Light" : "Dark"));
  };
  return (
    <>
      <style jsx global>{`
        html {
          font-family: "Segoe";
          font-weight: 400;
          background-color: ${theme == "Light" ? "#1A202C" : "#fff"};
          color: ${theme == "Light" ? "#fff" : "#000"} !important;
        }
        a {
          transition: all ease 0.4s;
          color: ${theme == "Light" ? "#8094AF" : "#5f6c80"};
        }
        a:hover {
          transition: all ease 0.4s;
          color: ${theme == "Light" ? "#fff" : "#000"};
        }
        button {
          color: ${theme == "Light" ? "#8094AF" : "#5f6c80"};
        }
        button:hover {
          transition: all ease 0.2s;
          color: ${theme == "Light" ? "#fff" : "#000"};
        }
        p {
          color: ${theme == "Light" ? "#8094AF" : "#5f6c80"};
        }
      `}</style>
      <ContextProvider
        value={{
          theme,
          themeUpdate,
        }}
      >
        <Container>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </ContextProvider>
    </>
  );
}
