import React , {useEffect , useState} from 'react'
import {Table , Button} from 'antd'
import API from '../../Services'
import {useParams , useHistory} from 'react-router-dom'

const {Column} = Table

function Index() {

    let { id } = useParams()

    let history = useHistory()

    const [data, setdata] = useState(null)


    useEffect(() => {
        API.getComments(id).then( result => setdata(result))

    }, [id])
    
    return (
        <>
            <div className='main-table'>
                    <h4 className='table-title'>Comments</h4>

                    <Button type="primary" onClick={() => history.goBack()}>Back</Button>

                    {
                        data && 
                            <Table dataSource={data}>
                                <Column dataIndex='id' title='ID' />
                                <Column dataIndex='name' title='Name' />
                                <Column dataIndex='email' title='Email' />
                                <Column dataIndex='body' title='Body' />
                            </Table>
                    }
            
            </div>
        </>
    )
}

export default Index
