import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import type { CartItemType } from '../types/types'

const CartContainer = () => {
	const { cartItems, amount, total } = useSelector(state => state.cart)

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
		</section>
	)
}

export default CartContainer
