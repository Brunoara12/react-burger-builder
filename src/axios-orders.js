import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-burger-builder-b7a9f.firebaseio.com'
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'

export default instance
