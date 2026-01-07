// Updated: 2026-01-07T06:21:42.346Z
// Updated: 2026-01-07T06:21:40.830Z
// Updated: 2026-01-07T06:21:38.713Z
// Updated: 2026-01-07T06:21:37.208Z
// Updated: 2026-01-07T06:21:35.963Z
// Updated: 2026-01-07T06:21:35.681Z
// Updated: 2026-01-07T06:21:33.648Z
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Toaster } from 'react-hot-toast'
import { Layout } from '@/components/layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dreamize - Your Career Platform',
  description: 'Find your dream job or hire the best talent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Layout>
            {children}
          </Layout>
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  )
}


