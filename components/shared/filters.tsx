import { Title } from '.'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title text='Фильтры' size='sm' className='mt-5 font-bold' />

			<div className='flex flex-col gap-4'></div>
		</div>
	)
}
