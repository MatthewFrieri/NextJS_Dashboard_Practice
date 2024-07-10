export const metadata = {
  title: 'Next.js course',
  description: 'This course was offered by Vercel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
