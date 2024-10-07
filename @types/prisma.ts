import { Ingredient, Product, ProductVariant } from '@prisma/client'

export type ProductWithRelations = Product & {
	ingredients: Ingredient[]
	variants: ProductVariant[]
}
