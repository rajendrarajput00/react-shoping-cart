import React from 'react'
import PropTypes from 'prop-types'
import { NavBarComponent } from '../Components/NavBarComponent'
import { BannerComponent } from '../Components/BannerComponent'
import { CategoryListComponent } from '../Components/CategoryListComponent'

function Home(props) {
    return (
        <div>
            <BannerComponent></BannerComponent>
            <CategoryListComponent></CategoryListComponent>
        </div>
    )
}

Home.propTypes = {}

export default Home
