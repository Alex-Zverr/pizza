'use client'

import { ProductWithRelations } from '@/@types/prisma'
import { ChooseProductForm, ChooseVariantsForm } from '@/components/shared'
import { Dialog } from '@/components/ui'
import {
	DialogContent,
	DialogDescription,
	DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

interface Props {
	product: ProductWithRelations
	className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
	const router = useRouter()
	const isVariantsProduct = Boolean(product.variants[0].pizzaType)

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
					className
				)}
				aria-describedby='description'
			>
				{isVariantsProduct ? (
					<ChooseVariantsForm
						name={product.name}
						variants={product.variants}
						imageUrl={product.imageUrl}
						ingredients={product.ingredients}
						onClickAdd={() => router.push(`/product/${product.id}`)}
					/>
				) : (
					<ChooseProductForm
						name={product.name}
						variants={product.variants}
						imageUrl={product.imageUrl}
						ingredients={product.ingredients}
						onClickAdd={() => router.push(`/product/${product.id}`)}
					/>
				)}

				<DialogTitle className='hidden' />
				<DialogDescription className='hidden'></DialogDescription>
			</DialogContent>
		</Dialog>
	)
}
