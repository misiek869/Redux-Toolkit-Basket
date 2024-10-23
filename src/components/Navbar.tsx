import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
	const { amount } = useSelector((store: RootState) => store.cart)

	return (
		<nav className='bg-neutral-100 py-5 px-8 border-b border-gray-500 shadow-sm'>
			<div className='max-w-5xl w-full flex justify-between items-center mx-auto'>
				<h3 className='mb-0 tracking-wider text-orange-600'>
					Redux Toolkit Basket
				</h3>
				<div className='block relative'>
					<FaShoppingCart className='w-8 h-8 text-orange-600' />
					<div className='absolute rounded-full flex items-center justify-center bg-neutral-400 bottom-5 left-5 w-7 h-7'>
						<p className='text-white mb-0 text-xl'>{amount}</p>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
