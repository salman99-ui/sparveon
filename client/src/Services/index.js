import Get from './get'
import Post from './post'
import Delete from './delete'
import 
{
    baseUrl ,
    localAPI
} 
from './config'

//get 

const getUsers = () => Get(`${baseUrl}/users`)

const getPosts = (id) => Get(`${baseUrl}/users/${id}/posts`)

const getComments = (id) => Get(`${baseUrl}/posts/${id}/comments`)

const getAlbums = (id) => Get(`${baseUrl}/users/${id}/albums`)

const getPhotos = (id) => Get(`${baseUrl}/albums/${id}/photos`)




//post

const login = (values) => Post(`${localAPI}/login` , values)

const register = (values) => Post(`${localAPI}/register` , values)

const createPost = (values) => Post(`${baseUrl}/posts` , values)



//delete 

const deletePost = (id) => Delete(`${baseUrl}/posts/${id}`)


//Put 





const API = {

    getUsers ,
    getPosts ,
    getComments ,
    getAlbums ,
    getPhotos , 
    login ,
    register ,
    deletePost , 
    createPost 

}

export default API