import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared'
import { ProductCard } from '@/components/shared/product-card'

export default function Home() {
	return (
		<div>
			<Container className='mt-10'>
				<Title text='Все пиццы' size={'lg'} className='font-bold' />
			</Container>

			<TopBar />

			<Container className='mt-10 pb-14'>
				<div className='flex gap-[80px]'>
					{/* Фильтры */}
					<div className='w-[250px] shrink-0'>
						<Filters />
					</div>

					{/* Список товаров */}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList title="Пицца" categoryId={1} products={[
								{
									id: 1,
									name: 'Пицца с сыром',
									image: 'https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif',
									items: [
										{
											price: 500,
										},
										{
											price: 800,
										},
										{
											price: 999,
										}
									]
								},
								{
									id: 2,
									name: 'Пицца с курицей',
									image: 'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
									items: [
										{
											price: 280,
										},
										{
											price: 300,
										},
										{
											price: 320,
										}
									]
								},
								{
									id: 3,
									name: 'Пицца с беконом',
									image: 'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
									items: [
										{
											price: 280,
										},
										{
											price: 300,
										},
										{
											price: 320,
										}
									]
								},
								{
									id: 4,
									name: 'Пицца 4 сезона',
									image: 'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
									items: [
										{
											price: 280,
										},
										{
											price: 300,
										},
										{
											price: 320,
										}
									]
								},
								{
									id: 5,
									name: 'Пицца с сыром',
									image: 'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
									items: [
										{
											price: 280,
										},
										{
											price: 300,
										},
										{
											price: 320,
										}
									]
								},
								{
									id: 6,
									name: 'Пицца с сыром',
									image: 'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
									items: [
										{
											price: 280,
										},
										{
											price: 300,
										},
										{
											price: 320,
										}
									]
								},
							]} />
							<ProductsGroupList title="Закуски" categoryId={1} products={[
								{
									id: 1,
									name: 'Пицца с сыром',
									image: 'https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif',
									items: [
										{
											price: 500,
										},
										{
											price: 800,
										},
										{
											price: 999,
										}
									]
								},
								{
									id: 2,
									name: 'Пицца с курицей',
									image: 'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
									items: [
										{
											price: 280,
										},
										{
											price: 300,
										},
										{
											price: 320,
										}
									]
								},
								{
									id: 3,
									name: 'Пицца с беконом',
									image: 'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
									items: [
										{
											price: 280,
										},
										{
											price: 300,
										},
										{
											price: 320,
										}
									]
								},
								{
									id: 4,
									name: 'Пицца 4 сезона',
									image: 'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
									items: [
										{
											price: 280,
										},
										{
											price: 300,
										},
										{
											price: 320,
										}
									]
								},
								{
									id: 5,
									name: 'Пицца с сыром',
									image: 'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
									items: [
										{
											price: 280,
										},
										{
											price: 300,
										},
										{
											price: 320,
										}
									]
								},
								{
									id: 6,
									name: 'Пицца с сыром',
									image: 'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
									items: [
										{
											price: 280,
										},
										{
											price: 300,
										},
										{
											price: 320,
										}
									]
								},
							]} />
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
