'use client'

import { cn } from '@/lib/utils'
import { Api } from '@/services/api-client'
import { Product } from '@prisma/client'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useDebounce } from 'react-use'

interface Props {
	className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
	const [searchValue, setSearchValue] = useState('')
	const [focused, setFocused] = useState(false)
	const [products, setProducts] = useState<Product[]>([])

	useDebounce(
		() => {
			Api.products.search(searchValue).then(items => setProducts(items))
		},
		500,
		[searchValue]
	)

	const onClickItem = () => {
		setSearchValue('')
		setProducts([])
	}

	return (
		<>
			{focused && <div className='fixed inset-0 bg-black/50 z-30'></div>}
			<div
				className={cn(
					'flex rounded-2xl flex-1 justify-between relative h-11',
					className
				)}
			>
				<Search className='absolute z-40 left-3 top-1/2 -translate-y-1/2 h-5 text-gray-400' />
				<input
					type='text'
					className='rounded-2xl outline-none w-full bg-gray-50 pl-11 z-30'
					placeholder='Поиск'
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
				/>

				{products.length > 0 && (
					<div
						className={cn(
							'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
							focused && 'visible opacity-100 top-12'
						)}
					>
						{products.map(product => (
							<Link
								key={product.id}
								className='flex items-center gap-2 px-3 py-2 hover:bg-primary/10 cursor-pointer'
								href={`/product/${product.id}`}
								onClick={onClickItem}
							>
								<img
									className='rounded-sm h-8 w-8'
									src={product.imageUrl}
									alt={product.name}
								/>
								<span>{product.name}</span>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	)
}
