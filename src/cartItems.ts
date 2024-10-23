import { v4 as uuidv4 } from 'uuid'
import { CartItemType } from './types/types'

const cartItems: CartItemType[] = [
	{
		id: uuidv4(),
		title: 'LEGO ICONS Corvette',
		price: '99.99',
		img: 'https://imgbox.com/RcioCPbw',
		amount: 1,
	},
	{
		id: uuidv4(),
		title: 'LEGO Batmobile',
		price: '139.99',
		img: 'https://imgbox.com/wdU8PN2W',
		amount: 1,
	},
	{
		id: uuidv4(),
		title: 'LEGO Ghostbusters Vehicle',
		price: '79.99',
		img: 'https://imgbox.com/7VznuoEl',
		amount: 1,
	},
	{
		id: uuidv4(),
		title: 'LEGO ICONS Porsche 911',
		price: '119.99',
		img: 'https://imgbox.com/Llk71qLB',
		amount: 1,
	},
]

export default cartItems
