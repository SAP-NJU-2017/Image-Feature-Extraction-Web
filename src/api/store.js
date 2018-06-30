import axios from 'axios'

export function fetchPicResult(callback, path) {
    axios.get(`/find_error_area?path=${path}`)
        .then(function (response) {
            callback(response.data)
            // eslint-disable-next-line
            console.log(response.data)
        })
        .catch(function (error) {
            // eslint-disable-next-line
            console.log(error)
        })
}
