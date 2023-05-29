import './globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Aqela Technologies',
  description: 'Aqela Technologies Website',
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className="bg-primaryBlack">
          <Header/>
          <main className="flex min-h-screen flex-col items-center justify-between p-4 2xl:p-0 relative 2xl:container 2xl:mx-auto">
              {children}
          </main>
          <Footer/>
      </body>
    </html>
  )
}
