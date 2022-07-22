import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { NavBarComponent } from '../Components/NavBarComponent'
import axios from 'axios'
import { CartState } from '../Context/Context'
export const ProductCategory = () => {

    const [CategoryList, setCategoryList] = useState([]);
    const [filterList, setfilterList] = useState([]);
    const { searchString: { searchString } } = CartState();

    let { categoryName } = useParams()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${categoryName}`).then((res) => {
            setCategoryList(res.data)
        })
    }, [])


    useEffect(() => {
        if (searchString) {
            let sortedProducts = CategoryList.filter((prod) =>
                prod.title.toLowerCase().includes(searchString)
            );
            setfilterList(sortedProducts)
        }

    }, [searchString])

    let categoryListIteam = searchString ? filterList.length ? filterList : [] : CategoryList;
    return (
        <>
            <div className='container'>
                <div className='mt-5 mb-5'>Product Category List</div>
                <div className='row'>
                    {categoryListIteam.length ? categoryListIteam.map((productData) => {
                        return (

                            <div className='col-lg-3'>
                                <Link to={`/product-description/${productData.id}`}>
                                    <div className='box'>
                                        <img style={{ height: '20vh', objectFit: 'contain' }} className='w-100' src={productData.image}></img>
                                        <h5>{productData.title}</h5>
                                        <span>{productData.price}</span>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                        : <p>No Products</p>
                    }

                </div>
            </div>
        </>
    )
}
