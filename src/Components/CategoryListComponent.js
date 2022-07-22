import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export const CategoryListComponent = () => {

    const [CategoryList, setCategoryList] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories').then((res) => {
            setCategoryList(res.data)
        })
    }, [])

    return (
        <div className='container'>
            <div className='text-center mt-5'><b>Category of products</b></div>
            <div className='row'>
                {CategoryList.length && CategoryList.map((categoryName) => {
                    return (
                        <div className='col-lg-3'>
                            <Link to={`/product-category/${categoryName}`}>
                                <div className='box'>
                                    <img className='w-100' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'></img>
                                    <div className=''>
                                        <h4>{categoryName}</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
                }

            </div>

        </div>

    )
}
