import React from 'react'

type CartItemProps = {
	id: string
	img: string
	title: string
	price: string
	amount: number
}

const CartItem = ({ id, img, title, price, amount }: CartItemProps) => {
	console.log(img)
	return (
		<article>
			<img src={img} alt={title} />
		</article>
	)
}

export default CartItem
