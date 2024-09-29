import { prisma } from '@/prisma/prisma-client'

export async function GET() {
	const categories = await prisma.category.findMany()
	return new Response(JSON.stringify(categories))
}
