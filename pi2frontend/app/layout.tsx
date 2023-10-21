import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components'

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
      <body className='relative'>
        <Header />
        {children}
      </body>
    </html>
  )
}
