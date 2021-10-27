import axios from "axios";

const Post = (path , values) => {
    const promises = new Promise((resolve , reject) => {
        axios
          .post(path , values)
          .then( result => { resolve(result.data) }) 
          .catch( err => { reject(err) })
    })

    return promises
}

export default Post