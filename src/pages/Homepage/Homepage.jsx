import React from 'react'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import SlideBarComponent from '../../components/SlideBar/SlideBarComponent'
import DashboardContent from '../../components/DashboardContent/DashboardContent'
import './Homepage.scss'

const Homepage = () => {
    return (
        <div>
            <HeaderComponent />
            <div className='Container'>
                <div className='sidebar'>
                    <SlideBarComponent />
                </div>
                <div className='content'>
                    <DashboardContent />
                </div>
            </div>
        </div>
    )
}

export default Homepage