import { Container, Title, VariantsImage } from '@/components/shared'
import { GroupVariants } from '@/components/shared/group-variants'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'

export default async function ProductPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findFirst({
		where: {
			id: Number(id),
		},
	})

	if (!product) {
		return notFound()
	}

	return (
		<Container className='flex flex-col my-10'>
			<div className='flex flex-1'>
				<VariantsImage imageUrl={product.imageUrl} size={40} />

				<div className='w-[490px] bg-[#f7f6f5] p-7'>
					<Title
						text={product.name}
						size='lg'
						className='font-extrabold mb-1'
					/>
					<p className='text-gray-40'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
						voluptatem ipsam nulla aut! Quas perferendis, a aperiam omnis ipsa,
						ex sit quae cupiditate est similique accusantium fugiat harum, quasi
						aspernatur.
					</p>

					<GroupVariants
						className='mt-6'
						selectedValue='2'
						variants={[
							{
								name: 'Маленькая',
								value: '1',
							},
							{
								name: 'Количество',
								value: '2',
							},
							{
								name: 'Цвет',
								value: '3',
								disabled: true,
							},
						]}
					/>
				</div>
			</div>
		</Container>
	)
}
