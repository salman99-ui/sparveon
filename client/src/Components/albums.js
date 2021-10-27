import React , {useEffect , useState} from 'react'
import {Table , Button} from 'antd'
import {Link} from 'react-router-dom'
import API from '../Services'


const {Column} = Table

function Index({id}) {

    const [ data , setdata] = useState(null)

    useEffect(() => {
        API.getAlbums(id).then( result => setdata(result))

    } ,[id])

    return (
        <>
        <div>
            <div className='main-table'>
                <h2 className='table-title'>Albums</h2>
                    {
                        data && 
                            <Table dataSource={data}> 
                                <Column dataIndex='id' title='ID' />
                                <Column dataIndex='title' title='Title' />
                                <Column dataIndex='id' render={(text , record) => 
                                    <>
                                        <Link to={`/albums/${text}/photos`}>
                                            <Button type='primary' size='small'>See Detail</Button>
                                        </Link>
                                    </>
                                }/>
                            </Table>
                    }
            </div>
        </div>
        </>
    )
}

export default Index
