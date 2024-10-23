import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartContainer = () => {
	const { cartItems, amount, total } = useSelector(state => state.cart)

	if (amount < 1) {
		return (
			<section className='min-h-[calc(100vh-120px)] w-[90vw] my-0 mx-auto mt-10 py-8 px-0 max-w-5xl'>
				<header>
					<h2 className='uppercase text-center mb-10 text-gray-800'>
						your bag
					</h2>
					<h4 className='lowercase text-gray-800 mt-4 text-center'>
						is currently empty
					</h4>
				</header>
			</section>
		)
	}

	return <div>container</div>
}

export default CartContainer
