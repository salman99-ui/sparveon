import React , {useEffect , useState} from 'react'
import {Table , Button , Modal , Space , notification , Form , Input} from 'antd'
import {Link} from 'react-router-dom'
import API from '../Services'
import { PlusOutlined , RestOutlined , EyeOutlined}  from '@ant-design/icons'

const {Column} = Table



function Index({id}) {

    const [data, setdata] = useState(null)

    const [selected , setSelected] = useState(null)

    const [parentData , setParentData] = useState({
            showDelete : false , 
            showAdd : false ,
    })

    const selectedData = (id) => {
            setParentData({...parentData , showDelete :true })
            setSelected(id)

    }

    const deletePost = (id) => {
        setParentData({...parentData , showDelete : false })
        API.deletePost(id).then( result => {
            notification['success']({
                message : "Delete Success !" ,
                description : "Data has been deleted !"
            })
        })
    }



    const onFinish = (values) => {
        setParentData({...parentData , showAdd : false })
        API.createPost(values).then( result => {
            notification['success']({
                message : "Create Success !" ,
                description : "Data has been Saved !"
            })
        })
    }


    useEffect(() => {
        API.getPosts(id).then( result => setdata(result))

    } , [id])


    return (
        <>     
            <div className='main-table'>
                <div className='table-header'>
                    <h3 className='table-title'>Data Posts</h3>
                    <Button type='primary' onClick={() =>  setParentData({...parentData , showAdd : true })}>
                        <PlusOutlined /> Create
                    </Button>
                </div>

                      { data && 
                            <Table 
                                pagination={{defaultPageSize : 5 , position : ['bottomLeft']}} 
                                dataSource={data}
                                bordered>

                                <Column dataIndex='id' title='ID' />
                                <Column dataIndex='title' title='Title' />
                                <Column dataIndex='body' title='Body' />
                                <Column 
                                    dataIndex='id' 
                                    title='Action'
                                    colSpan={9}
                                    render={(text , record) => 
                                        <>
                                            <Space size='middle'>
                                                <Link to={`/posts/${text}/comments`}>
                                                    <Button size='small' type='primary'><EyeOutlined /> Detail</Button>
                                                </Link>

                                                <Button danger size='small' 
                                                        onClick={() => selectedData(text)} 
                                                        type='primary'>
                                                            
                                                <RestOutlined />
                                                </Button>
                                            </Space>  
                                        </>
                                    }/>
                            </Table>
                    }
            </div>

            {/* This is modal delete*/}


            <Modal
                centered
                visible={parentData.showDelete}
                onOk={() => deletePost(selected)}
                onCancel={() => setParentData({...parentData , showDelete : false }) }>

                <h3>Are You Sure Want to Delete ?</h3>
            </Modal>


            {/* This is modal add*/}

            <Modal
                centered
                visible={parentData.showAdd}
                onOk={() => deletePost(selected)}
                onCancel={() => setParentData({...parentData , showAdd : false }) }
                footer={[
                    <Button onClick={() => setParentData({...parentData , showAdd : false })}>Cancel</Button> ,
                    <Button type='primary' form='add' htmlType='submit'>Submit</Button>    

                ]}>

                <Form
                    id='add'
                    layout='vertical'
                    onFinish={onFinish}
                    colon={false}>

                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input title!' }]}>

                        <Input />
                    </Form.Item>
                
                    <Form.Item
                        label="Body"
                        name="body"
                        rules={[{ required: true, message: 'Please input message!' }]}>
                            
                        <Input.TextArea />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default Index
