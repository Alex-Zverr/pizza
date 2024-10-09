'use client'

import { IngredientCard, Title, VariantsImage } from '@/components/shared'
import {
	mapPizzaType,
	PizzaSize,
	pizzaSize,
	pizzaType,
	PizzaType,
} from '@/constants/variants'
import { cn } from '@/lib/utils'
import { Ingredient, ProductVariant } from '@prisma/client'
import { useState } from 'react'
import { useSet } from 'react-use'
import { Button } from '../ui'
import { GroupVariants } from './group-variants'

interface Props {
	imageUrl: string
	name: string
	ingredients: Ingredient[]
	variants: ProductVariant[]
	onClickAdd?: VoidFunction
	className?: string
}

export const ChooseVariantsForm: React.FC<Props> = ({
	name,
	variants,
	imageUrl,
	ingredients,
	onClickAdd,
	className,
}) => {
	const [size, setSize] = useState<PizzaSize>(20)
	const [type, setType] = useState<PizzaType>(1)

	const [selectedIngredients, { toggle: addIngredient }] = useSet(
		new Set<number>([])
	)

	const textDetails = `${size} см, ${mapPizzaType[type]} тесто, ${name}`

	const variantPrice = variants.find(
		v => v.size === size && v.pizzaType === type
	)!.price
	const ingredientsPrice = ingredients
		.filter(ingredients => selectedIngredients.has(ingredients.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0)

	const total = variantPrice + ingredientsPrice

	const handleClickAdd = () => {
		console.log({
			size,
			type,
			ingredients: selectedIngredients,
			total,
		})
	}

	return (
		<div className={cn(className, 'flex flex-1')}>
			<div className='flex items-center justify-center flex-1 relative'>
				<VariantsImage imageUrl={imageUrl} size={size} />
			</div>

			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text='Выберите пиццу' size='lg' className='font-bold' />
				<p className='text-gray-400'>{textDetails}</p>

				<div className='flex flex-col gap-4 my-4'>
					<GroupVariants
						variants={pizzaSize}
						value={String(size)}
						onClick={value => setSize(Number(value) as PizzaSize)}
					/>
					<GroupVariants
						variants={pizzaType}
						value={String(type)}
						onClick={value => setType(Number(value) as PizzaType)}
					/>
				</div>

				<div className='bg-gray-50 p-4  h-[280px] overflow-auto scrollbar'>
					<div className='grid grid-cols-3 gap-3 '>
						{ingredients.map(ingredient => (
							<IngredientCard
								key={ingredient.id}
								imageUrl={ingredient.imageUrl}
								name={ingredient.name}
								price={ingredient.price}
								active={selectedIngredients.has(ingredient.id)}
								onClick={() => addIngredient(ingredient.id)}
							/>
						))}
					</div>
				</div>

				<Button
					onClick={handleClickAdd}
					className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
				>
					Добавить в корзину за p {total} ₽
				</Button>
			</div>
		</div>
	)
}
