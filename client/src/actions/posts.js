import * as api from '../api'

export const get_posts = () => async dispatch => {
    try {
        const { data } = await api.fetch_posts()
        dispatch({type: 'FETCH_ALL', payload: data})
    } catch(error) {
        console.log(error.message)
    }
}