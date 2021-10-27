const user = require('../Model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secretKey = '221547'

exports.register = (req , res , next) =>{
    
    let { username , email , password } = req.body 

    if(!username || !password )
        res.status(400)
            .json({
                message : 'field username or password should not be empty'
            })

    bcrypt.hash(password , 10 )
          .then( result => {
              
            const Data = new user({
                  username : username ,
                  email : email ,
                  password : result
              })

              Data.save().then( result => {
                  res.status(201).json({
                      message : 'success' ,
                      data : result
                  })
              })

          })

          .catch(err => {
              res.status(500).json({
                  message : 'internal server error'
              })
          })        

}


exports.login = (req , res , next) => {
    const {username , password} = req.body


    if(!username || !password)
    
    res.status(400)
        .json({ message : ' Wrong username or password , Try Again! '})

    
    user.findOne({username : username})
        .then( User => {

            if(!User)
                res.status(400).json({ message : 'User Not Found!'})

            bcrypt.compare(req.body.password , User.password)
                    .then( valid => {
                        
                        if(!valid)
                            res.status(400).json({ message : "Incorrect Password"})

                        const token = jwt.sign({id : User._id} , secretKey , { expiresIn : '1h'} )

                        res.status(200)
                            .json({
                                message : 'Login Success' ,
                                id : User._id ,
                                token : token
                            })
                    })
        })

}

