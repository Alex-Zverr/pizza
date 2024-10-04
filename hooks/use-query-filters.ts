import { useEffect } from 'react'
import { Filters } from './use-filters'
import QueryString from 'qs'
import { useRouter } from 'next/navigation'

export const useQueryFilters = (filters: Filters) => {
	const router = useRouter()

	useEffect(() => {
		const params = {
			...filters.prices,
			pizzaTypes: Array.from(filters.types),
			pizzaSizes: Array.from(filters.sizes),
			ingredients: Array.from(filters.selectedIngredients),
		}

		const query = QueryString.stringify(params, {
			arrayFormat: 'comma',
			addQueryPrefix: true,
		})

		router.push(String(query), { scroll: false })
	}, [filters, router])
}
