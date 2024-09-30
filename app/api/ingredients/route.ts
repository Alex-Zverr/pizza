import { prisma } from '@/prisma/prisma-client'

export async function GET() {
	const ingredients = await prisma.ingredient.findMany()
	return new Response(JSON.stringify(ingredients))
}
