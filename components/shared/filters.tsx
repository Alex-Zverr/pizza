'use client'

import { UseFilterIngredients } from '@/hooks/useFilterIngredients'
import { CheckboxFilterGroup, FilterCheckbox, RangeSlider, Title } from '.'
import { Input } from '../ui'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading, onAddId, selectedIds } = UseFilterIngredients()

	const listIngredients = ingredients.map(item => ({
		label: item.name,
		slug: 'ingredients',
		value: String(item.id),
	}))

	return (
		<div className={className}>
			<Title text='Фильтры' size='md' className='mb-5 font-bold' />

			{/* Верхние чекбоксы */}
			<div className='flex flex-col gap-4'>
				<FilterCheckbox label='Можно собирать' value='1' />
				<FilterCheckbox label='Новинки' value='2 ' />
			</div>

			{/* Фильтр по цене */}
			<div className='mt-5 border-y border-y-neutral-100 pt-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-3'>
					<Input type='number' placeholder='от' min={0} max={3000} />
					<Input type='number' placeholder='до' min={100} max={3000} />
				</div>

				<RangeSlider min={0} max={3000} step={10} />
			</div>

			<CheckboxFilterGroup
				title='Ингредиенты'
				items={listIngredients}
				limit={6}
				loading={loading}
				name='ingredients'
				className='mt-5'
				defaultValue={selectedIds}
				onClickCheckbox={onAddId}
			/>
		</div>
	)
}
