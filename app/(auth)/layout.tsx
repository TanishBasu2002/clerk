import { ClerkProvider } from "@clerk/nextjs"

export const metadata = {
  title: 'Next.js 13 with Clerk',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
    <body className="bg-gradient-to-r from-orange-600 via-orange-300 to-white">
      <div className="w-full flex justify-center items-center min-h-screen">
      {children}
      </div>
    </body>
    </html>
    </ClerkProvider>
  )
}