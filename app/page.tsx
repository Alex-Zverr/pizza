import { Container, Filters, Title, TopBar } from '@/components/shared'

export default function Home() {
	return (
		<div>
			<Container className='mt-10'>
				<Title text='Все пиццы' size={'lg'} className='font-bold' />
			</Container>

			<TopBar />

			<Container>
				<div className='flex gap-[60px]'>
					{/* Фильтры */}
					<div className='w-[250px] shrink-0'>
						<Filters />
					</div>

					{/* Список товаров */}
					<div className='flex-1'></div>
				</div>
			</Container>
		</div>
	)
}
