import React from 'react'
import {BrowserRouter as Router , Route , Switch , Redirect } from 'react-router-dom'
import { Login , Register , Detail , Comment , Photos , Main} from '../Pages'
import {Header} from '../Components'
function Index() {
    return (
            <Router>
               
               <Header />
               
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/user' />
                    </Route>
                    <Route path="/user" exact component={Main} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register"  exact component={Register} />
                    <Route path="/user/:id/detail" exact component={Detail} />
                    <Route path="/posts/:id/comments" exact component={Comment} />
                    <Route path="/albums/:id/photos" exact component={Photos} />
                </Switch>
            </Router>
    )
}

export default Index
