import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youtube Ad Blocker",
  description:
    "YouTube is a fun website for watching and sharing videos. Ads can be annoying but you can use an adblocker extension to enjoy your favorite content without ads",
};

const StructuredData = ({ data }) => {
  return (
    <Head>
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TrueAdBlocker",
    mainEntityOfPage: {
      "@type": "WebSite",
      "@id": "https://www.youtubeadblocker.net/",
    },
    headline:
      "YouTube is a fun website for watching and sharing videos. Ads can be annoying but you can use an adblocker extension to enjoy your favorite content without ads",
    description:
      "YouTube is a fun website for watching and sharing videos. Ads can be annoying but you can use an adblocker extension to enjoy your favorite content without ads",
    image: "https://www.youtubeadblocker.net/navbar-logo.svg",
    author: {
      "@type": "Organization",
      name: "TrueAdBlocker",
    },
    publisher: {
      "@type": "Organization",
      name: "",
      logo: {
        "@type": "ImageObject",
        url: "https://www.youtubeadblocker.net/navbar-logo.svg",
      },
    },
    datePublished: "2023-07-14",
  };
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        <link rel="canonical" href="https://www.youtubeadblocker.net/" />

        <meta property="og:url" content="https://www.youtubeadblocker.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Youtube Ad Blocker" />
        <meta
          property="og:description"
          content="YouTube is a fun website for watching and sharing videos. Ads can be annoying, but you can use an ad blocker extension to enjoy your favorite content without ads"
        />
        <meta
          property="og:image"
          content="https://www.youtubeadblocker.net/navbar-logo.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="youtubeadblocker.net" />
        <meta
          property="twitter:url"
          content="https://www.youtubeadblocker.net/"
        />
        <meta name="twitter:title" content="Youtube Ad Blocker" />
        <meta
          name="twitter:description"
          content="YouTube is a fun website for watching and sharing videos. Ads can be annoying, but you can use an adblocker extension to enjoy your favorite content without ads"
        />
        <meta
          name="twitter:image"
          content="https://www.youtubeadblocker.net/navbar-logo.svg"
        />
      </head>
      <StructuredData data={structuredData} />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
