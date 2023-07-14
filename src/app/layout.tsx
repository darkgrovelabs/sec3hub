import ThemeProvider from '@/providers/ChakraThemeProvider'
import QueryClientProvider from '@/providers/QueryClientProvider'
import './globals.css'
import { cookies } from 'next/headers'
import WalletProvider from '@/providers/WalletProvider'

export const metadata = {
  title: 'Sec3hub: Open-source, community-driven, security-focused',
  description: 'Join Sec3hub, where crypto security is a community effort',
  keywords: [
    'sec3hub',
    'web3 security',
    'audit companies',
    'security',
    'crypto',
    'community',
    'open-source',
  ],
  authors: [
    {
      name: 'DarkGrove Labs',
      url: 'https://github.com/darkgrovelabs',
    },
  ],
  creator: 'DarkGrove Labs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sec3hub.xyz',
    title: 'Sec3hub: Open-source, community-driven, security-focused',
    description: 'Join Sec3hub, where crypto security is a community effort',
    siteName: 'Sec3Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sec3Hub',
    description: 'Join Sec3hub, where crypto security is a community effort',
    images: [`https://sec3hub.xyz/thumbnail.jpg`],
    creator: '@darkgrovelabs',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const uiColorMode =
    (cookieStore.get('chakra-ui-color-mode')?.value as 'light' | 'dark') ||
    'dark'

  return (
    <html
      lang='en'
      data-theme={uiColorMode}
      style={{ colorScheme: uiColorMode }}
    >
      <head />
      <body className={`chakra-ui-${uiColorMode}`}>
        <ThemeProvider colorMode={uiColorMode}>
          <QueryClientProvider>
            <WalletProvider>{children}</WalletProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
