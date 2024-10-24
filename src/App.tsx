import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals, getProducts } from './features/cart/cartSlice'
import { RootState, AppDispatch } from './store'
import Modal from './components/Modal'

function App() {
	const { cartItems, isLoading } = useSelector((store: RootState) => store.cart)
	const isOpenModal = useSelector((store: RootState) => store.modal.isOpen)
	const dispatch: AppDispatch = useDispatch()

	useEffect(() => {
		dispatch(calculateTotals())
	}, [cartItems])

	useEffect(() => {
		dispatch(getProducts())
	}, [])

	if (isLoading) {
		return (
			<div className=''>
				<h1>Loading...</h1>
			</div>
		)
	}

	return (
		<main>
			{isOpenModal && <Modal />}
			<Navbar />
			<CartContainer />
		</main>
	)
}

export default App
