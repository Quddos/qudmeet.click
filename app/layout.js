import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'Qudmeet.click',
    template: '%s | Qudmeet.click'
  },
  description: "Qudmeet.click is SaaS AI-Hub automation and Career Acing Firm, establish to help you build, earn, and enhance neccessary technologies required to land your dreama and aspiration. We provide varies of Tools and Features such as AI Demo interview, Job Opportunity, File Conversion and tools etc.",
  keywords: [
    'AI interview practice',
    'job opportunities',
    'file conversion',
    'career development',
    'SaaS',
    'AI tools'
  ],
  authors: [{ name: 'Qudmeet' }],
  creator: 'Qudmeet',
  robots: 'index,follow',
  googlebot: 'index,follow',
  canonical: 'https://qudmeet.click',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://qudmeet.click',
    siteName: 'Qudmeet.click',
    title: 'Qudmeet.click - AI-Powered Hub Platform',
    description: 'AI-powered platform for AI-Hub Support and career development, featuring interview practice, job opportunities, and file conversion tools.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Qudmeet.click Platform'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qudmeet.click - AI Career Platform',
    description: 'AI-powered career development tools and opportunities',
    images: ['/twitter-image.jpg']
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin="anonymous"
          />
        </head>
        <body className={inter.className}>
          <Toaster />
          <ClientLayout>{children}</ClientLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
