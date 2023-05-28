import './globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
          <main className="flex min-h-screen flex-col items-center justify-between relative 2xl:container 2xl:mx-auto">
              {children}
          </main>
          <Footer/>
      </body>
    </html>
  )
}
