import { v4 as uuidv4 } from 'uuid'
import { CartItemType } from './types/types'

const cartItems: CartItemType[] = [
	{
		id: uuidv4(),
		title: 'LEGO ICONS Corvette',
		price: '99.99',
		img: 'https://i.postimg.cc/qqsQrrNf/LEGO-10321-ICONS-Corvette-glowne.webp',
		amount: 1,
	},
	{
		id: uuidv4(),
		title: 'LEGO Batmobile',
		price: '139.99',
		img: 'https://i.postimg.cc/wTkFb6KL/LEGO-76328-DC-Batman.webp',
		amount: 1,
	},
	{
		id: uuidv4(),
		title: 'LEGO Ghostbusters Vehicle',
		price: '79.99',
		img: 'https://i.postimg.cc/dtF4BhfJ/LEGO-Creator-ECTO-1-Ghostbusters.webp',
		amount: 1,
	},
	{
		id: uuidv4(),
		title: 'LEGO ICONS Porsche 911',
		price: '119.99',
		img: 'https://i.postimg.cc/kMKTKQfj/LEGO-Creator-Porsche-911.webp',
		amount: 1,
	},
]

export default cartItems
