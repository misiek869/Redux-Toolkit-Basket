import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import type { CartItemType } from '../types/types'
import { RootState } from '../store'

const CartContainer = () => {
	const { cartItems, amount, total } = useSelector(
		(state: RootState) => state.cart
	)

	const sectionStyles =
		'min-h-[calc(100vh-120px)] w-[90vw] my-0 mx-auto mt-10 py-8 px-0 max-w-5xl'

	const sectionHeading2Styles = 'uppercase text-center mb-10 text-gray-800'

	if (amount < 1) {
		return (
			<section className={sectionStyles}>
				<header>
					<h2 className={sectionHeading2Styles}>your bag</h2>
					<h4 className='lowercase text-gray-800 mt-4 text-center'>
						is currently empty
					</h4>
				</header>
			</section>
		)
	}

	return (
		<section className={sectionStyles}>
			<header>
				<h2 className={sectionHeading2Styles}>your bag</h2>
			</header>
			<div className=''>
				{cartItems.map(item => (
					<CartItem key={item.id} {...item} />
				))}
			</div>
			<footer className='mt-16 text-center'>
				<hr />
				<div>
					<h4 className='capitalize flex justify-between mt-4'>
						total <span>${total}</span>
					</h4>
				</div>
				<button
					type='button'
					className='uppercase bg-orange-500 text-neutral-50 py-2 px-4 rounded-sm hover:bg-orange-700 duration-300 shadow-sm cursor-pointer tracking-wider inline-block mt-8'>
					clear cart
				</button>
			</footer>
		</section>
	)
}

export default CartContainer
