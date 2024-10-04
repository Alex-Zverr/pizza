'use client'

import { useFilters, useIngredients, useQueryFilters } from '@/hooks'
import { FC } from 'react'
import { CheckboxFilterGroup, RangeSlider, Title } from '.'
import { Input } from '../ui'

interface Props {
	className?: string
}

export const Filters: FC<Props> = ({ className }) => {
	const { ingredients, loading } = useIngredients()
	const filters = useFilters()

	useQueryFilters(filters)

	const listIngredients = ingredients.map(item => ({
		label: item.name,
		slug: 'ingredients',
		value: String(item.id),
	}))

	return (
		<div className={className}>
			<Title text='Фильтры' size='md' className='mb-5 font-bold' />

			{/* Верхние фильтры */}
			<CheckboxFilterGroup
				title='Размеры'
				limit={6}
				defaultValue={filters.sizes}
				onClickCheckbox={filters.setSizes}
				className='mb-5'
				items={[
					{ label: '20 см', slug: 'sizes', value: '20' },
					{ label: '30 см', slug: 'sizes', value: '30' },
					{ label: '40 см', slug: 'sizes', value: '40' },
				]}
			/>
			<CheckboxFilterGroup
				title='Тип теста'
				limit={6}
				defaultValue={filters.types}
				onClickCheckbox={filters.setTypes}
				className='mb-5'
				items={[
					{ label: 'Тонкое', slug: 'sizes', value: '1' },
					{ label: 'Традиционное', slug: 'sizes', value: '2' },
				]}
			/>

			{/* Фильтр по цене */}
			<div className='mt-5 border-y border-y-neutral-100 pt-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-3'>
					<Input
						type='number'
						placeholder='от'
						min={0}
						max={3000}
						value={String(filters.prices.priceFrom)}
						onChange={e =>
							filters.updatePrices('priceFrom', Number(e.target.value))
						}
					/>
					<Input
						type='number'
						placeholder='до'
						min={100}
						max={3000}
						value={String(filters.prices.priceTo)}
						onChange={e =>
							filters.updatePrices('priceTo', Number(e.target.value))
						}
					/>
				</div>

				<RangeSlider
					min={0}
					max={3000}
					step={10}
					value={[
						filters.prices.priceFrom || 0,
						filters.prices.priceTo || 3000,
					]}
					onValueChange={([priceFrom, priceTo]) =>
						filters.setPrices({ priceFrom, priceTo })
					}
				/>
			</div>

			<CheckboxFilterGroup
				title='Ингредиенты'
				items={listIngredients}
				limit={6}
				loading={loading}
				className='mt-5'
				defaultValue={filters.selectedIngredients}
				onClickCheckbox={filters.setSelectedIngredients}
			/>
		</div>
	)
}
