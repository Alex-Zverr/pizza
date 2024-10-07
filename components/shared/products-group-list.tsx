'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'
import { ProductCard, Title } from '.'

interface Props {
	title: string
	products: any[]
	className?: string
	listClassName?: string
	categoryId: number
	categorySlug: string
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	products,
	className,
	listClassName,
	categoryId,
	categorySlug,
}) => {
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
	const intersectionRef = useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.7,
		root: null,
		rootMargin: '200px 0px 0px -200px',
	})

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, intersection?.isIntersecting, title])

	return (
		<div className={className} id={categorySlug} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />

			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{products.map(product => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						price={product.variants[0].price}
					/>
				))}
			</div>
		</div>
	)
}
