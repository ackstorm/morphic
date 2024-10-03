import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { Toaster } from '@/components/ui/sonner'
import { AppStateProvider } from '@/lib/utils/app-state'
import { ThirdwebProvider } from 'thirdweb/react'
import Head from 'next/head'
import { useUIState } from 'ai/rsc'
import { AI } from '@/app/actions'

const title = 'ACKstorm SearchGPT'
const description = 'ACKstorm SearchGPT: Search with AI.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ackstorm.com'),
  title,
  description,
  keywords: [
    'ackstorm.com',
    'TheACKsearch',
    'searchGPT',
    'ACKstorm SearchGPT',
    'Search Platform',
    'ai',
    'gpt',
    'rewards',
    'AI-powered search engine',
    'AI search engine',
    'Decentralized search engine',
    'Privacy-focused search engine',
    'AI-driven search engine',
    'GPT-powered search engine',
    'Learn and Earn search engine',
    'Web3 search engine',
    'Search engine for crypto users',
    'Search and Earn rewards',
    'Blockchain-based search engine',
    'AI Google alternative',
    'AI search rewards',
    'Secure AI search platform',
    'Privacy-first AI search',
    'Decentralized web search',
    'AI search with data privacy',
    'AI search with tokenomics',
    'Search engine for blockchain users',
    'SearchGPT by ACKsearch',
    'ACKsearch AI-powered search',
    'AI search engine rewards',
    'ChatGPT alternative search',
    'Best AI search engine',
    'Secure AI search engine',
    'AI-powered decentralized search',
    'Tokenized search rewards',
    'Privacy and rewards search engine',
    'AI and Web3 search',
    'ACKsearch AI SearchGPT',
    'ackstorm.com search engine',
    'ACKsearch AI Learn and Earn',
    'ACKsearch AI privacy search',
    'ACKsearch AI rewards search',
    'ACKsearch AI vs Google Search',
    'SearchGPT by ACKsearch AI',
    'ACKsearch Learn-to-Earn platform',
    'ACKsearch AI rewards engine',
    'AI-powered ACKsearch search',
    'ACKsearch AI Web3 search platform',
    'ACKsearch search tokenomics',
    'ACKsearch AI blockchain search',
    'ACKsearch AI decentralized search',
    'ACKsearch AI privacy-focused search'
  ],
  openGraph: {
    title,
    description
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@abid'
  },
  icons: ['https://www.ackstorm.com/logo-black.png']
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800&family=Roboto+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>ackstorm.com</title>
        <meta
          name="description"
          content="ACKstorm SearchGPT: Search with AI."
        />
        <meta
          name="keywords"
          content="ackstorm.com,TheACKsearch,searchGPT,ACKstorm SearchGPT,Search Platform,ai,gpt,rewards,AI-powered search engine,AI search engine,Decentralized search engine,Privacy-focused search engine,AI-driven search engine,GPT-powered search engine,Learn and Earn search engine,Web3 search engine,Search engine for crypto users,Search and Earn rewards,Blockchain-based search engine,AI Google alternative,AI search rewards,Secure AI search platform,Privacy-first AI search,Decentralized web search,AI search with data privacy,AI search with tokenomics,Search engine for blockchain users,SearchGPT by ACKsearch,ACKsearch AI-powered search,AI search engine rewards,ChatGPT alternative search,Best AI search engine,Secure AI search engine,AI-powered decentralized search,Tokenized search rewards,Privacy and rewards search engine,AI and Web3 search,ACKsearch AI SearchGPT,ackstorm.com search engine,ACKsearch AI Learn and Earn,ACKsearch AI privacy search,ACKsearch AI rewards search,ACKsearch AI vs Google Search,SearchGPT by ACKsearch AI,ACKsearch Learn-to-Earn platform,ACKsearch AI rewards engine,AI-powered ACKsearch search,ACKsearch AI Web3 search platform,ACKsearch search tokenomics,ACKsearch AI blockchain search,ACKsearch AI decentralized search,ACKsearch AI privacy-focused search"
        />

        <meta property="og:title" content="ackstorm.com" />
        <meta
          property="og:description"
          content="ACKstorm SearchGPT: Search with AI."
        />
        <meta property="og:image" content="https://www.ackstorm.com/logo-black.png" />
        <meta property="og:url" content="https://ackstorm.com" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="TMsJ43oR1s_rX8TcZrBCM538U1hdtB3GbUV5Tzi6_8o"
        />
        <meta
          name="description"
          content="ACKstorm SearchGPT: Search with AI."
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="ackstorm.com" />
        <meta
          property="og:description"
          content="ACKstorm SearchGPT: Search with AI."
        />
        <meta property="og:image" content="https://www.ackstorm.com/logo-black.png" />
        <meta property="og:url" content="https://ackstorm.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ackstorm.com" />
        <meta
          name="twitter:description"
          content="ACKstorm SearchGPT: Search with AI."
        />
        {/* Canonical Tag */}
        <link rel="canonical" href="https://ackstorm.com" />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://ackstorm.com',
            '@type': 'WebPage',
            name: 'ackstorm.com',
            description: 'ACKstorm SearchGPT: Search with AI.',
            url: 'https://ackstorm.com'
          })}
        </script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
      </Head>

      <body
        style={{
          fontFamily: 'Jost, sans-serif'
        }}
      >
        <ThirdwebProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <AppStateProvider>
              <AI>
                <Header />
              </AI>
              {children}
              {/* <Sidebar /> */}
              <Footer />
              <Toaster />
            </AppStateProvider>
          </ThemeProvider>
        </ThirdwebProvider>
      </body>
    </html>
  )
}
