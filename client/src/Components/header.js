import React from 'react'
import {Menu , Dropdown} from 'antd'
import {Link } from 'react-router-dom'
import {SettingFilled} from '@ant-design/icons'
import '../utilities/components/style/header.css'

const logOut = () => {
    localStorage.removeItem('token')

}


const menu = () => {

    if( !!localStorage.getItem('token')){
        
        return (
                <Menu>
                    <Menu.Item key="0">
                        <Link onClick={logOut} to='/login'>Log Out</Link>
                    </Menu.Item>
                </Menu>
            )
    }
       
        return( 
            <Menu>
                <Menu.Item key="1">
                    <Link to='/login'>Log In</Link>
                </Menu.Item>
            </Menu>
        )


}

function Index() {


    return (
        <div className='main-header'>
            <Link to='/user' className='home-link'>Home</Link>

            <div className='drop-menu'>
                <Dropdown overlay={menu} trigger={['click']}>
                    <span className='header-link' ><SettingFilled /> Account</span>
                </Dropdown>
            </div>
        </div>
    )
}

export default Index
