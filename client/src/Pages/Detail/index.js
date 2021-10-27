import React , {useEffect} from 'react'
import {Posts , Albums} from '../../Components'
import {useParams , useHistory} from 'react-router-dom'
import {Button} from 'antd'
import './detail.css'


function Index() {

    let {id} = useParams()
    let history = useHistory()

    useEffect( () => {
        if(! localStorage.getItem('token') ){
            history.replace('/login')
        }

    },[id])

    return (
        <>
        <div>
            <div className='detail-header'>
                <Button type='primary' onClick={() => history.goBack()}>&#8592; Back</Button>
            </div>
            <Posts id={id} />
            <Albums id={id} />
        </div>
        </>
    )
}

export default Index
