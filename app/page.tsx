import { Container, Filters, Title, TopBar } from '@/components/shared'
import { ProductCard } from '@/components/shared/product-card'

export default function Home() {
	return (
		<div>
			<Container className='mt-10'>
				<Title text='Все пиццы' size={'lg'} className='font-bold' />
			</Container>

			<TopBar />

			<Container className='mt-10 pb-14'>
				<div className='flex gap-[60px]'>
					{/* Фильтры */}
					<div className='w-[250px] shrink-0'>
						<Filters />
					</div>

					{/* Список товаров */}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductCard
								id={0}
								name='Чизбургер'
								price={550}
								imageUrl='https://media.dodostatic.net/image/r:292x292/11EE7D6110059795842D40396BCF1E73.avif'
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
