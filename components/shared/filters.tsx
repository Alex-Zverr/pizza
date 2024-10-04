'use client'

import { UseFilterIngredients } from '@/hooks/use-filter-ingredients'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'qs'
import { FC, useEffect, useState } from 'react'
import { useSet } from 'react-use'
import { CheckboxFilterGroup, RangeSlider, Title } from '.'
import { Input } from '../ui'

interface Props {
	className?: string
}
interface PriceProps {
	priceFrom?: number
	priceTo?: number
}

interface QueryFilters extends PriceProps {
	pizzaTypes: string
	pizzaSizes: string
	ingredients: string
}

export const Filters: FC<Props> = ({ className }) => {
	const searchPrams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>
	const router = useRouter()
	const { ingredients, loading, onAddId, selectedIds } = UseFilterIngredients(
		searchPrams.get('ingredients')?.split(',')
	)

	const [sizes, { toggle: toggleSizes }] = useSet(
		new Set<string>(searchPrams.get('pizzaSizes')?.split(',') || [])
	)
	const [types, { toggle: toggleTypes }] = useSet(
		new Set<string>(searchPrams.get('pizzaTypes')?.split(',') || [])
	)

	const [prices, setPrices] = useState<PriceProps>({
		priceFrom: Number(searchPrams.get('priceFrom')) || undefined,
		priceTo: Number(searchPrams.get('priceTo')) || undefined,
	})

	const listIngredients = ingredients.map(item => ({
		label: item.name,
		slug: 'ingredients',
		value: String(item.id),
	}))

	const onChangePrices = (values: number[]) => {
		setPrices({ priceFrom: values[0], priceTo: values[1] })
	}

	const filters = {
		...prices,
		pizzaTypes: Array.from(types),
		pizzaSizes: Array.from(sizes),
		ingredients: Array.from(selectedIds),
	}

	useEffect(() => {
		const query = qs.stringify(filters, {
			arrayFormat: 'comma',
			addQueryPrefix: true,
		})

		router.push(String(query), { scroll: false })
	}, [filters])

	return (
		<div className={className}>
			<Title text='Фильтры' size='md' className='mb-5 font-bold' />

			{/* Верхние чекбоксы */}
			<CheckboxFilterGroup
				title='Размеры'
				limit={6}
				defaultValue={sizes}
				onClickCheckbox={toggleSizes}
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
				defaultValue={types}
				onClickCheckbox={toggleTypes}
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
						value={String(prices.priceFrom)}
						onChange={e =>
							onChangePrices([Number(e.target.value), prices.priceTo || 3000])
						}
					/>
					<Input
						type='number'
						placeholder='до'
						min={100}
						max={3000}
						value={String(prices.priceTo)}
						onChange={e =>
							onChangePrices([prices.priceFrom || 0, Number(e.target.value)])
						}
					/>
				</div>

				<RangeSlider
					min={0}
					max={3000}
					step={10}
					value={[prices.priceFrom || 0, prices.priceTo || 3000]}
					onValueChange={([priceFrom, priceTo]) =>
						onChangePrices([priceFrom, priceTo])
					}
				/>
			</div>

			<CheckboxFilterGroup
				title='Ингредиенты'
				items={listIngredients}
				limit={6}
				loading={loading}
				className='mt-5'
				defaultValue={selectedIds}
				onClickCheckbox={onAddId}
			/>
		</div>
	)
}
