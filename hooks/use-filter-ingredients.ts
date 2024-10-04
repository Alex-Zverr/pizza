import { Api } from '@/services/api-client'
import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useSet } from 'react-use'

interface ReturnProps {
	ingredients: Ingredient[]
	loading: boolean
	selectedIds: Set<string>
	onAddId: (id: string) => void
}

export const UseFilterIngredients = (values: string[] = []): ReturnProps => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])
	const [loading, setLoading] = useState(true)
	const [selectedIds, { toggle }] = useSet(new Set<string>(values))

	useEffect(() => {
		const getIngredients = async () => {
			try {
				setLoading(true)
				const response = await Api.ingredients.getAll()
				setIngredients(response)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		getIngredients()
	}, [])

	return { ingredients, loading, onAddId: toggle, selectedIds }
}
