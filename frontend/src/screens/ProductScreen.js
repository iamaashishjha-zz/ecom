import React, {useState, useEffect} from 'react'
import { Link , useParams } from 'react-router-dom'
import { Row, Col, Card, Image, ListGroup, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import {useDispatch, useSelector} from 'react-redux'
import { listProductDetail } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


function ProductScreen({ match }) {
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productDetail)
    const { id } = useParams()
    const { loading, error, product  } = productDetail

    useEffect(() => {
        dispatch(listProductDetail(id))
    }, [dispatch, match])
    
    return (

        <div>
            <Link to='/' className='btn btn-outline-danger my-3'>
                Go Back
            </Link>
            {loading ?
                <Loader /> 
                : error 
                    ? <Message variant='danger' >{error}</Message>
                :
                (
                    <Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid>

                            </Image>
                        </Col>
                        <Col md={3}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Price : ${product.price}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Description : {product.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                Price:
                                            </Col>
                                            <Col>
                                                <strong>${product.price}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                Status:
                                            </Col>
                                            <Col>
                                                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'
                                                }
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item className='text-center'>
                                        <Button className='btn btn-block' type='button' disabled={product.countInStock === 0}>
                                            <i className='fas fa-shopping-cart mx-2'></i>
                                            Add to Cart
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                )
            }
        </div>

    )
}

export default ProductScreen