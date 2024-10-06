import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar,
} from '@/components/shared'
import { prisma } from '@/prisma/prisma-client'

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					ingredients: true,
					variants: true,
				},
			},
		},
	})

	return (
		<div>
			<Container className='mt-10'>
				<Title text='Все пиццы' size={'lg'} className='font-bold' />
			</Container>

			<TopBar cats={categories} />

			<Container className='mt-10 pb-14'>
				<div className='flex gap-[80px]'>
					{/* Фильтры */}
					<div className='w-[250px] shrink-0'>
						<Filters />
					</div>

					{/* Список товаров */}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							{categories.map(
								category =>
									category.products.length > 0 && (
										<ProductsGroupList
											key={category.id}
											title={category.name}
											categorySlug={category.slug}
											categoryId={category.id}
											products={category.products}
										/>
									)
							)}
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
