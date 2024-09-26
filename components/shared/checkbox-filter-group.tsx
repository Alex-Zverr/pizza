'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Input } from '../ui'
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox'

type Item = FilterCheckboxProps

interface Props {
	title: string
	items: Item[]
	limit: number
	searchInputPlaceholder?: string
	onChange?: (value: string[]) => void
	defaultValue?: string[]
	className?: string
}

export const CheckboxFilterGroup: React.FC<Props> = ({
	title,
	items,
	limit,
	searchInputPlaceholder,
	className,
	onChange,
	defaultValue,
}) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	const list = showAll
		? items.filter(item => item.text.includes(searchValue))
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
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={false}
						onCheckedChange={ids => console.log(ids)}
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
