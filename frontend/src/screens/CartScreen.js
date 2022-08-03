import React, {useEffect} from 'react'
import {Link, useParams, useLocation } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import {Message} from '../components/Message'
import {addToCart} from '../actions/cartActions';

function CartScreen(){
	
	let location = useLocation();
	const {id} = useParams()
	const productId = id
	const qty = location.search ? Number(location.search.split('=')[1]) : 1
	console.log('Cart Qty : ',qty)

	const dispatch = useDispatch()
	const cart = useSelector(state => state.cart)
	const {cartItems} = cart

	// console.log('CartItems : ', cartItems)

	useEffect(() => {
		if(productId){
			dispatch(addToCart(productId, qty))
		} 
	}, [dispatch, productId, qty])

	return (
		<div>
			Cart
		</div>
	)
}

export default CartScreen

 