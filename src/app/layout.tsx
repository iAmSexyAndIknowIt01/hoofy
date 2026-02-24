import "./globals.css"
import { Providers } from "./providers"
import { LanguageProvider } from "./language-provider"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mn" suppressHydrationWarning>
      <body>
        <Providers> 
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  )
}