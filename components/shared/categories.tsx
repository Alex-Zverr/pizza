'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'

interface Props {
	className?: string
}

const cats = [
	{ id: 1, name: 'Пиццы' },
	{ id: 2, name: 'Закуски' },
	{ id: 3, name: 'Гриль' },
	{ id: 4, name: 'Острые' },
	{ id: 5, name: 'Закрытые' },
	{ id: 6, name: 'Вегетарианская' },
	{ id: 7, name: 'Новинки' },
	{ id: 8, name: 'Мясные' },
]



export const Categories: React.FC<Props> = ({ className }) => {
	const categoryActiveId = useCategoryStore((state) => state.activeId)

	return (
		<div
			className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
		>
			{cats.map(({name, id}) => (
				<a
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
					)}
					key={id}
					href={`/#${name}`}
				>
					{name}
				</a>
			))}
		</div>
	)
}
