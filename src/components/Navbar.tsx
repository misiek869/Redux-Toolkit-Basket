import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Navbar = () => {
	return (
		<nav className='bg-[var(--clr-primary)] py-5 px-8'>
			<div className='w-full flex justify-center items-center mx-auto'>
				<h3 className='mb-0 tracking-wider text-[var(--clr-red)]'>
					Redux Toolkit Basket
				</h3>
			</div>
		</nav>
	)
}

export default Navbar
