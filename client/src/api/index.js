import axios from 'axios'

export const fetch_posts = async () => {
    return await axios.get('/api/posts')
}