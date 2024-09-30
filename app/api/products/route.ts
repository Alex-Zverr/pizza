import { prisma } from '@/prisma/prisma-client'

export async function GET() {
	const products = await prisma.product.findMany()
	return new Response(JSON.stringify(products))
}
