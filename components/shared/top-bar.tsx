import { cn } from '@/lib/utils'
import { Categories, Container, SortPopup } from '.'
import { Category } from '@prisma/client'

interface Props {
	cats: Category[]
	className?: string
}

export const TopBar: React.FC<Props> = ({ cats, className }) => {
	return (
		<div
			className={cn(
				'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
				className
			)}
		>
			<Container className='flex items-center justify-between'>
				<Categories cats={cats} />
				<SortPopup />
			</Container>
		</div>
	)
}
