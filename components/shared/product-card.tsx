import { Plus } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui'
import { Title } from './title'

interface Props {
	id: number
	name: string
	price: number
	imageUrl: string
	className?: string
}

export const ProductCard: React.FC<Props> = ({
	id,
	name,
	price,
	imageUrl,
	className,
}) => {
	return (
		<div className={className}>
			<Link href={`product/${id}`} className='block'>
				<div className='flex justify-center p-6 bg-secondary rounded-lg h-[250px]'>
					<img
						src={imageUrl}
						alt={name}
						className='aspect-square w-full object-contain'
					/>
				</div>

				<Title text={name} size='sm' className='font-bold' />

				<p className='text-sm text-gray-400'>
					Цыпленок в соусе чили, пикантная пепперони, салями, моцарелла,
					пармезан, грибы, маслины.
				</p>

				<div className='flex justify-between items-center mt-4'>
					<span className='text-[20px]'>
						от <b>{price} ₽</b>
					</span>

					<Button variant='secondary' className='text-base font-bold'>
						<Plus size={20} className='mr-1' />
						Добавить
					</Button>
				</div>
			</Link>
		</div>
	)
}
