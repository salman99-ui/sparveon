import React from 'react'
import {Form  , Input , Button} from 'antd'
import {Link, useHistory} from 'react-router-dom'
import API from '../../Services'
import './register.css'


function Index() {

  const history = useHistory()

    const onFinish = (values) => {
        API.register(values).then( result => history.push('/login'))
        
    }

    return (
        <div className='wrapper-register'>
          <div className='main-register'>
           <h3 className='register-title'>Register</h3>
             <Form
                name="basic"
                labelCol={{ span: 4 }}
                layout='vertical'
                onFinish={onFinish}
                colon={false}>

              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

    
              <Form.Item
                label="Email"
                name="email"
                rules={[
                    { required: true, message: 'Please input your email !'  } , 
                    { type : 'email', message: 'Please input your valid email !' }
                ]}
                style={{marginBottom : 20}}>

                <Input />
              </Form.Item>


              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                style={{marginBottom : 30}}
              >
                <Input.Password />
              </Form.Item>

    
              <Form.Item>
                <Button type="primary" className='btn-sign' htmlType="submit">
                  Sign Up
                </Button>

                <span className='login-link'>Alredy have an account ? 
                  <Link to='/login' > Login</Link>
                </span>
              </Form.Item>
        </Form>
        </div>
        </div>
    )
}

export default Index
