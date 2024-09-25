import { FilterCheckbox, RangeSlider, Title } from '.'
import { Input } from '../ui'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title text='Фильтры' size='md' className='mb-5 font-bold' />

			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Можно собирать' value='1' />
				<FilterCheckbox text='Новинки' value='2 ' />
			</div>

			<div className="mt-5 border-y border-y-neutral-100 pt-6 pb-7">
				<p className="font-bold mb-3">Цена от и до:</p>
				<div className="flex gap-3 mb-3">
					<Input type="number" placeholder="от" min={0} max={3000} />
					<Input type="number" placeholder="до" min={100} max={3000} />
				</div>

				<RangeSlider min={0} max={3000} step={100} />
			</div>
		</div>
	)
}
