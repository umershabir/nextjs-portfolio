/*
file: main app file
*/
// dependencies
import { useState } from "react";
import { Inter } from "next/font/google";
import "@/styles/style.scss";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import type { AppProps } from "next/app";
import { ContextProvider } from "@/components/ContextAPI";
// creating context for theming,
// definig web font in next js for prerendering
const inter = Inter({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
// main app component
export default function App({ Component, pageProps }: AppProps) {
  const [data, setData] = useState({
    posts: [],
    projects: [],
  });
  const { posts, projects } = data;
  const update = (posts: [], projects: []) => {
    setData({
      posts,
      projects,
    });
  };
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
          font-weight: 400;
        }
      `}</style>
      <ContextProvider
        value={{
          posts,
          projects,
          theme: false,
          update,
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
