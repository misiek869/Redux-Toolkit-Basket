import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/cart/modalSlice'

const Modal = () => {
	const dispatch = useDispatch()

	const handleClearCartAndCloseModal = () => {
		dispatch(clearCart())
		dispatch(closeModal())
	}

	const btnStyle =
		'uppercase bg-neutral-50 text-orange-500 py-1 px-4 inline-block cursor-pointer shadow-md rounded-md hover:bg-neutral-200 hover:text-orange-600 duration-200 tracking-wider  text-base'

	return (
		<aside className='fixed top-0 left-0 w-full h-full bg-neutral-50 bg-opacity-70 z-10 flex items-center justify-center'>
			<div className='bg-orange-500  text-neutral-50 shadow-lg  z-30 w-[80vw] py-8 px-4 text-center max-w-96 rounded-md'>
				<h3 className='mb-0 leading-10 text-2xl'>
					Do you want to empty the cart?
				</h3>
				<div className='flex justify-evenly mt-4'>
					<button
						className={btnStyle}
						type='button'
						onClick={handleClearCartAndCloseModal}>
						yes
					</button>
					<button
						onClick={() => dispatch(closeModal())}
						className={btnStyle}
						type='button'>
						no
					</button>
				</div>
			</div>
		</aside>
	)
}

export default Modal
