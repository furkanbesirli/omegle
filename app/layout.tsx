import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import AuthProvider from "./Providers";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Omegle: Talk to strangers!",
  description: "Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other.",
  keywords: "Omegle, chat, meet new people, secure chat, online friends",
  robots: "index, follow",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
           <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other."/>
        <meta name="keywords" content="Omegle, chat, meet new people, secure chat, online friends"/>
        <meta name="robots" content="index, follow"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omegle-seven.vercel.app" />
        <meta property="og:title" content="Omegle.com - Omegle: Talk to strangers!" />
        <meta property="og:description" content="Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other." />
        <meta property="og:image" content="https://omegle-seven.vercel.app/logo_1.webp" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://omegle-seven.vercel.app" />
        <meta property="twitter:title" content="Omegle.com - Omegle: Talk to strangers!" />
        <meta property="twitter:description" content="Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other." />
        <meta property="twitter:image" content="https://omegle-seven.vercel.app/logo_1.webp" />
      </head>

      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}