

export const metadata = {
  title: 'Meu Projeto',
  description: 'Um projeto Next.js com tRPC, Prisma e Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
