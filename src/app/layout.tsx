import ThemeProvider from '@/providers/ChakraThemeProvider'
import QueryClientProvider from '@/providers/QueryClientProvider'
import './globals.css'
import { cookies } from 'next/headers'
import WalletProvider from '@/providers/WalletProvider'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
