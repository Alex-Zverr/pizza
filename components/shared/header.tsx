import { cn } from '@/lib/utils'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import { Container } from '.'
import { Button } from '../ui'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = className => {
	return (
		<header className={cn('border border-b', className)}>
			<Container className={cn('flex justify-between items-center py-8')}>
				{/* Левая часть */}
				<div className='flex items-center gap-4'>
					<Image src='/logo.png' alt='logo' width={35} height={35} />
					<div>
						<h1 className='text-2xl uppercase font-bтlack'>NEXT PIZZA</h1>
						<p className='text-sm text-gray-400 leading-3'>
							вкусней уже некуда
						</p>
					</div>
				</div>

				{/* Правая часть */}
				<div className='flex items-center gap-4'>
					<Button variant='outline' className='flex items-center gap-1'>
						<User size={16} />
						Войти
					</Button>

					<div>
						<Button variant='default' className='group relative'>
							<b>520 ₽</b>
							<span className='h-full w-[1px] bg-white/30 mx-3' />
							<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
								<ShoppingCart className='w-4 h-4 relative' strokeWidth={2} />
								<b>3</b>
							</div>
							<ArrowRight className='w-5 h-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
						</Button>
					</div>
				</div>
			</Container>
		</header>
	)
}
