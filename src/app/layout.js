import NavBar from '../../components/NavBar'
import './globals.css'
import { Inknut_Antiqua } from 'next/font/google'

const inknut = Inknut_Antiqua({ subsets: ['latin'],weight: '500' })

export const metadata = {
  title: 'Berry Treees',
  description: 'Bespoke Apparel/Art',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inknut.className}>
      <NavBar/>
        {children}
      </body>
    </html>
  )
}
