'use client'

import { CheckboxFilterGroup, FilterCheckbox, RangeSlider, Title } from '.'
import { Input } from '../ui'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title text='Фильтры' size='md' className='mb-5 font-bold' />

			{/* Верхние чекбоксы */}
			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Можно собирать' value='1' />
				<FilterCheckbox text='Новинки' value='2 ' />
			</div>

			{/* Фильтр по цене */}
			<div className='mt-5 border-y border-y-neutral-100 pt-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-3'>
					<Input type='number' placeholder='от' min={0} max={3000} />
					<Input type='number' placeholder='до' min={100} max={3000} />
				</div>

				<RangeSlider min={0} max={3000} step={10} />
			</div>

			<CheckboxFilterGroup
				title='Ингредиенты'
				items={[
					{
						text: 'Сырный соус',
						value: '1',
					},
					{
						text: 'Моцарелла',
						value: '2',
					},
					{
						text: 'Чеснок',
						value: '3',
					},
					{
						text: 'Солённые огурчики',
						value: '4',
					},
					{
						text: 'Красный лук',
						value: '5',
					},
					{
						text: 'Томаты',
						value: '6',
					},
					{
						text: 'Помидоры',
						value: '7',
					},
					{
						text: 'Оливковое масло',
						value: '8',
					},
					{
						text: 'Сметана',
						value: '9',
					},
					{
						text: 'Бекон',
						value: '10',
					},
				]}
				limit={6}
				className='mt-5'
			/>
		</div>
	)
}
