'use client'

import { ChooseProductForm } from '@/components/shared'
import { Dialog } from '@/components/ui'
import { DialogContent } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { Product } from '@prisma/client'
import { useRouter } from 'next/navigation'

interface Props {
	product: Product
	className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
	const router = useRouter()

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
					className
				)}
			>
				<ChooseProductForm
					className='w-full h-full'
					imageUrl={product.imageUrl}
					ingredients={[]}
					name={product.name}
					onClickAdd={() => router.back()}
				/>
			</DialogContent>
		</Dialog>
	)
}
