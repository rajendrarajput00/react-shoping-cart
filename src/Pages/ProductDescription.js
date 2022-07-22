import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { NavBarComponent } from '../Components/NavBarComponent'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { CartState } from '../Context/Context'

import axios from 'axios'

export const ProductDescription = (props) => {

    const [ProductData, setProductData] = useState([]);

    let { productId } = useParams()

    let { state: { cart}, dispatch} = CartState();


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
            console.log('Respone', res);
            setProductData(res.data)
        })
    }, [productId])

    return (
        <>
            {/*   <div>
                <NavBarComponent count={cartValue}></NavBarComponent>
            </div> */}
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-4'>
                        <div className='box'>
                            <img className='w-100' style={{ objectFit: 'contain', height: '70vh' }} src={ProductData.image}></img>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div style={{ textAlign: 'left' }}>
                            <p>{ProductData?.title}</p>
                            <p>{ProductData.price}</p>
                            <Button onClick={() => dispatch({
                                type: "ADD_TO_CART",
                                payload: cart + 1

                            })}>Add to cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
