import axios from "axios";

const Delete = (path) => {
    const promises = new Promise((resolve , reject) => {
        axios
          .delete(path)
          .then( result => { resolve(result.data) }) 
          .catch( err => { reject(err) })
    })

    return promises
}

export default Delete