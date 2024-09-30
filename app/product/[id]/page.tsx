import { Container, Title } from '@/components/shared'

export default function ProductPage({
	params: { id },
}: {
	params: { id: string }
}) {
	return (
		<Container>
			<div className='mt-10'>
				<Title
					text={'Product id: ' + id}
					size='lg'
					className='font-extrabold mb-5'
				/>
			</div>
		</Container>
	)
}
