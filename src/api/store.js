import axios from 'axios'

export function fetchPicResult(callback, body) {
    axios.post('/find_error_area', body,
        {
            headers: {'Content-Type': 'application/json'}
        }
    )
        .then(function (response) {
            // eslint-disable-next-line
            console.log(response.data)
            callback(response.data)
        })
        .catch(function (error) {
            // eslint-disable-next-line
            console.log(error)
        })
}
