import { Geist, Lora } from "next/font/google"
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const lora = Lora({
  variable: "--font-lora", //
  subsets: ["latin"],
  display: 'swap',
  style: ['normal', 'italic'], //
  weight: ['400', '500', '600', '700'], //
});

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${lora.variable} bg-[#e4e0d5] transition-colors duration-1000 ease-in-out min-h-screen`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}