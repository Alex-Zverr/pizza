import { prisma } from '@/prisma/prisma-client'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.get('query') || ''

	const products = await prisma.product.findMany({
		where: {
			name: {
				contains: query,
				mode: 'insensitive',
			},
		},
		take: 5,
	})

	return new Response(JSON.stringify(products))
}
