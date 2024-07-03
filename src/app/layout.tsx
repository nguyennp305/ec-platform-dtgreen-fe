"use client";

import { UserProvider } from "@/context/user-context";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import Head from 'next/head';
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <head /> */}
      <Head>
        <title>Trang chủ</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Mô tả của trang chủ của bạn" />
        <link rel="canonical" href="https://example.com" />
        <meta name="keywords" content="từ khóa, tối ưu hóa SEO" />
        <meta name="author" content="Tên tác giả" />
        <meta name="robots" content="index, follow" />
        {/* Thêm các thẻ meta khác tương ứng với nhu cầu của bạn */}
      </Head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className} overflow-y-scroll custom-scroll`}>
        <UserProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </UserProvider>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
