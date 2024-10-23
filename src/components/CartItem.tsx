import { GoChevronUp } from 'react-icons/go'
import { GoChevronDown } from 'react-icons/go'
import { removeItem } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

type CartItemProps = {
	id: string
	img: string
	title: string
	price: string
	amount: number
}

const CartItem = ({ id, img, title, price, amount }: CartItemProps) => {
	const dispatch = useDispatch()

	return (
		<article className='grid grid-cols-[auto_1fr_auto] gap-x-6 my-6 items-center '>
			<img className='w-24 h-24 object-cover' src={img} alt={title} />
			<div className=''>
				<h4 className='mb-2 font-semibold tracking-wider'>{title}</h4>
				<h4 className='mb-2 font-semibold tracking-wider text-gray-500'>
					{price}
				</h4>
				<button
					onClick={() => dispatch(removeItem(id))}
					className='text-orange-400 tracking-wider cursor-pointer text-sm bg-none hover:text-orange-600 duration-300 mt-1'
					type='button'>
					remove
				</button>
			</div>
			<div>
				<button>
					<GoChevronUp className='w-7 h-7 text-gray-600' />
				</button>
				<p className='text-center mb-0 text-xl'>{amount}</p>
				<button>
					<GoChevronDown className='w-7 h-7 text-gray-600' />
				</button>
			</div>
		</article>
	)
}

export default CartItem
