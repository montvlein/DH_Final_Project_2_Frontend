import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components'
import Footer from '@/components/Footer'
import { ReduxProvider } from '@/redux/provider'

export const metadata: Metadata = {
  title: 'Golden Ticket',
  description: 'App de venta de entradas de eventos'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className='relative flex flex-col h-screen w-full'>
        <ReduxProvider>
          <Header />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
