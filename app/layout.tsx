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
      <head>
        <script src="https://live.decidir.com/static/v2.6.4/decidir.js"></script>
      </head>
      <body className='relative flex flex-col h-screen w-full'>
        <ReduxProvider>
          <Header />
          <main className="flex-1 w-full flex flex-col bg-white text-gray-900">
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
