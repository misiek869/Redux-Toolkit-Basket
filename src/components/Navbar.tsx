import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Navbar = () => {
	return (
		<nav className='bg-neutral-100 py-5 px-8 border-b border-gray-500'>
			<div className='w-full flex justify-center items-center mx-auto'>
				<h3 className='mb-0 tracking-wider text-orange-600'>
					Redux Toolkit Basket
				</h3>
			</div>
		</nav>
	)
}

export default Navbar
