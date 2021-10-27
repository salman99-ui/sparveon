import axios from "axios";

const Get = (path) => {
    const promises = new Promise((resolve , reject) => {
        axios
          .get(path)
          .then( result => { resolve(result.data) }) 
          .catch( err => { reject(err) })
    })

    return promises
}

export default Get