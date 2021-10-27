import React , {useEffect, useState} from 'react'
import Api from '../../Services/index'
import {Table } from 'antd'
import {Link , useHistory} from 'react-router-dom'
import '../../utilities/pages/style/main-table.css'


const {Column} = Table



function Index() {

    const history = useHistory()

    const [data , setData] = useState(null)

    useEffect( () => {
        if( !!localStorage.getItem('token') ){
            Api.getUsers().then( data => setData(data))

        }else{
            history.push('/login')

        }
        
        
    } , [])


    return (
        <div className="main">            
            <div className='main-table'>
                <h3 className='table-title'>List of users</h3>
                { 
                        data && 
                            <Table dataSource={data} bordered >
                                <Column title='Name' dataIndex='name' key='name' />
                                <Column title='Email' dataIndex='email' key='email' />
                                <Column title='Address' dataIndex={['address' , 'street']} key='name' />
                                <Column dataIndex='id' render={(text , record) => 
                                    <>
                                        <Link to={`user/${text}/detail`}>Detail</Link>
                                    </>
                                 }/>
                            </Table> 
                }
               </div>
        </div>
    )
}

export default Index
