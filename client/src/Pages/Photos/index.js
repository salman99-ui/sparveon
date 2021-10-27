import React , {useEffect , useState} from 'react'
import {useParams , useHistory} from 'react-router-dom'
import {Table , Button} from 'antd'
import API from '../../Services'


const {Column} = Table



function Index() {

    let {id} = useParams()
    let history = useHistory()

    const [data , setdata] = useState(null)

    useEffect(() => {
        API.getPhotos(id).then( result => setdata(result))

    } , [id])


    return (

        <div>
            <Button type='primary' onClick={() => history.goBack()}>Back</Button>

            {
                data && 
                    <Table dataSource={data}>
                        <Column dataIndex='id' title='ID' key='id' />
                        <Column dataIndex='title' title='Title' key='title' />
                        <Column dataIndex='thumbnailUrl' title='Photos' 
                                render={(text , record) => 
                                    <>
                                        <img alt={text} src={text}  />
                                    </>
                                }
                        />

                    </Table>
            }
        </div>
    )
}

export default Index
