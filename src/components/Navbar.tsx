import { useSelector } from 'react-redux'
import CartIcon from './CartIcon'

const Navbar = () => {
	const amount = useSelector(store => store.cart.amount)

	return (
		<nav className='bg-neutral-100 py-5 px-8 border-b border-gray-500 shadow-sm'>
			<div className='w-full flex justify-center items-center mx-auto'>
				<h3 className='mb-0 tracking-wider text-orange-600'>
					Redux Toolkit Basket
				</h3>
				<div className='block relative'>
					<CartIcon />
					<div className='absolute rounded-full flex items-center justify-center bg-neutral-400 top-2 r-2 w-7 h-7'>
						<p className='text-white mb-0 text-xl'>{amount}</p>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
