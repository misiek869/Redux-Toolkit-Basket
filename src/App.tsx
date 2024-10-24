import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './features/cart/cartSlice'
import { RootState } from './store'
import Modal from './components/Modal'

function App() {
	const cartItems = useSelector((store: RootState) => store.cart)
	const isOpenModal = useSelector((store: RootState) => store.modal.isOpen)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(calculateTotals())
	}, [cartItems])

	return (
		<main>
			{isOpenModal && <Modal />}
			<Navbar />
			<CartContainer />
		</main>
	)
}

export default App
