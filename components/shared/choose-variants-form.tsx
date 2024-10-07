import { cn } from '@/lib/utils'
import { Button } from '../ui'
import { Title } from './title'

interface Props {
	imageUrl: string
	name: string
	ingredients: any[]
	variants?: any[]
	onClickAdd?: VoidFunction
	className?: string
}

export const ChooseVariantsForm: React.FC<Props> = ({
	name,
	variants,
	imageUrl,
	ingredients,
	onClickAdd,
	className,
}) => {
	const textDetails = 'Самая вкусная пицца во вселенной'
	const totalPrice = 500

	return (
		<div className={cn(className, 'flex flex-1')}>
			<div className='flex items-center justify-center flex-1 relative'>
				<img
					src={imageUrl}
					alt={name}
					className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'
				/>
			</div>

			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text='Выберите пиццу' size='lg' className='font-bold' />
				<p className='text-gray-400'>{textDetails}</p>

				<Button className='h-[55px] px-10 text-base rounded-[18px] w-full'>
					Добавить в корзину за p {totalPrice} ₽
				</Button>
			</div>
		</div>
	)
}
