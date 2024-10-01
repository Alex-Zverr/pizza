import { Checkbox } from '../ui'

export interface FilterCheckboxProps {
	label: string
	value: string
	slug?: string
	endAdornment?: React.ReactNode
	onCheckedChange?: (checked: boolean) => void
	checked?: boolean
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
	label,
	value,
	slug = 'default',
	endAdornment,
	onCheckedChange,
	checked,
}) => {
	return (
		<div className='flex items-center space-x-2'>
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				className='rounded-[8px] w-6 h-6'
				id={`checkbox-${slug}-${String(value)}`}
			/>
			<label
				htmlFor={`checkbox-${slug}-${String(value)}`}
				className='leading-none cursor-pointer flex-1'
			>
				{label}
			</label>
			{endAdornment}
		</div>
	)
}
