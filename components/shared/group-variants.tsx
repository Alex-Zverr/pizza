'use client'

import { cn } from '@/lib/utils'

interface Variant {
	name: string
	value: string
	disabled?: boolean
	className?: string
}

interface Props {
	variants: readonly Variant[]
	onClick?: (value: Variant['value']) => void
	selectedValue?: string
	className?: string
}

export const GroupVariants: React.FC<Props> = ({
	variants,
	onClick,
	selectedValue,
	className,
}) => {
	return (
		<div
			className={cn(
				'flex justify-between bg-[#f3f3f7] rounded-3xl p-1 select-none',
				className
			)}
		>
			{variants.map(variant => (
				<button
					key={variant.name}
					onClick={() => onClick?.(variant.value)}
					className={cn(
						'flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm',
						{
							'bg-white shadow': selectedValue === variant.value,
							'text-gary-500 opacity-50 pointer-events-none': variant.disabled,
						}
					)}
				>
					{variant.name}
				</button>
			))}
		</div>
	)
}
