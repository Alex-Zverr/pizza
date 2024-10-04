import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useSet } from 'react-use'

export interface PriceProps {
	priceFrom?: number
	priceTo?: number
}

interface QueryFilters extends PriceProps {
	pizzaTypes: string
	pizzaSizes: string
	ingredients: string
}

export interface Filters {
	sizes: Set<string>
	types: Set<string>
	prices: PriceProps
	selectedIngredients: Set<string>
}

interface ReturnProps extends Filters {
	updatePrices: (name: keyof PriceProps, values: number) => void
	setPrices: (value: PriceProps) => void
	setSizes: (value: string) => void
	setTypes: (value: string) => void
	setSelectedIngredients: (value: string) => void
}

export const useFilters = (): ReturnProps => {
	const searchPrams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>

	const [sizes, { toggle: toggleSizes }] = useSet(
		new Set<string>(searchPrams.get('pizzaSizes')?.split(',') || [])
	)

	const [types, { toggle: toggleTypes }] = useSet(
		new Set<string>(searchPrams.get('pizzaTypes')?.split(',') || [])
	)

	const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
		new Set<string>(searchPrams.get('ingredients')?.split(','))
	)

	const [prices, setPrices] = useState<PriceProps>({
		priceFrom: Number(searchPrams.get('priceFrom')) || undefined,
		priceTo: Number(searchPrams.get('priceTo')) || undefined,
	})

	const updatePrices = (name: keyof PriceProps, values: number) => {
		console.log(name, values)
		setPrices({
			...prices,
			[name]: values,
		})
	}

	return {
		sizes,
		types,
		prices,
		updatePrices,
		selectedIngredients,
		setPrices,
		setSizes: toggleSizes,
		setTypes: toggleTypes,
		setSelectedIngredients: toggleIngredients,
	}
}
