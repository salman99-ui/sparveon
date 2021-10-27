import React , {useState} from 'react'
import {Form  , Input , Checkbox , Button , Spin} from 'antd'
import {Link, useHistory} from 'react-router-dom'
import API from '../../Services'
import './login.css'

function Index() {

    const history = useHistory()

    const [loading , setLoading] = useState(false)

    const [err , setErr] = useState(false)

    const onFinish = (values) => {
        setLoading(true)
        
        API.login(values).then( result => {
          localStorage.setItem('token' , result.token)
          localStorage.setItem('id' , result.id)

          history.push('/user')
          
        })
        .catch( error => {
            setLoading(false)
            setErr(true)

        })
    }
    return (

      
        <div className='wrapper-login'>
          <div className='main-login'>
          <Spin spinning={loading}>
            <Form
              name="basic"
             
              initialValues={{ remember: true }}
              onFinish={onFinish}
              colon={false}
              autoComplete="off"
              layout='vertical'
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
        
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}

              >
                <Input.Password />
              </Form.Item>

              { err && <small className='login-err'>Your Username or Password Incorrect !</small> }

        
              <Form.Item 
                name="remember" 
                valuePropName="checked" 
                >

                <Checkbox>Remember me</Checkbox>
              </Form.Item>
        
              <Form.Item >
                <Button className='btn-submit' type="primary" htmlType="submit">
                  Login
                </Button>
                
                <span className='register'>Dont Have an Account ? 
                  <Link to='/register'> Register</Link>
                </span>
              </Form.Item>
            </Form>
          </Spin>
          </div>
        </div>

      );
}

export default Index
