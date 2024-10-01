'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Input, Skeleton } from '../ui'
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox'

type Item = FilterCheckboxProps

interface Props {
	title: string
	items: Item[]
	limit: number
	loading?: boolean
	searchInputPlaceholder?: string
	onClickCheckbox?: (id: string) => void
	defaultValue?: Set<string>
	className?: string
}

export const CheckboxFilterGroup: React.FC<Props> = ({
	title,
	items,
	limit,
	searchInputPlaceholder,
	className,
	loading,
	onClickCheckbox,
	defaultValue,
}) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	if (loading) {
		return (
			<div className={cn(className)}>
				<p className='font-bold mb-3'>{title}</p>
				<div className='flex flex-col gap-4'>
					{...Array(limit)
						.fill(0)
						.map((_, index) => (
							<Skeleton className='w-full h-6 rounded-[8px]' key={index} />
						))}

					<Skeleton className='w-28 h-6 rounded-[8px]' />
				</div>
			</div>
		)
	}

	const list = showAll
		? items.filter(item => item.label.includes(searchValue))
		: items.slice(0, limit)

	return (
		<div className={cn(className)}>
			<p className='font-bold mb-3'>{title}</p>

			{showAll && (
				<div className='mb-5'>
					<Input
						placeholder={searchInputPlaceholder}
						className='bg-gray-50 border-none'
						value={searchValue}
						onChange={handleSearchChange}
					/>
				</div>
			)}

			<div className='flex flex-col gap-5 max-h-96 overflow-auto scrollbar'>
				{list.map((item, index) => (
					<FilterCheckbox
						key={index}
						label={item.label}
						value={item.value}
						slug={item.slug}
						endAdornment={item.endAdornment}
						checked={defaultValue?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
					/>
				))}
			</div>
			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button
						onClick={() => setShowAll(!showAll)}
						className='text-primary mt-3'
					>
						{showAll ? 'Скрыть' : '+ Показать все'}
					</button>
				</div>
			)}
		</div>
	)
}
