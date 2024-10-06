import { Header } from '@/components/shared/header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Next Pizza | лучшая пицца в городе',
	description: 'Здесь будет описание',
}

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode
	modal: React.ReactNode
}>) {
	return (
		<main className='min-h-screen'>
			<Header />
			{children}
			{modal}
		</main>
	)
}
