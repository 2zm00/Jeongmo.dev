import "./globals.css"
import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import { ThemeProvider } from "@/src/components/theme-provider"
import Header from "@/src/app/components/Header"
import Footer from "@/src/app/components/Footer"
import BackgroundMusic from "@/src/app/components/BackgroundMusic"

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
})

export const metadata: Metadata = {
  title: "Jeongmo.dev",
  description: "A futuristic portfolio showcasing interactive components and music",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={notoSansKR.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <BackgroundMusic />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

