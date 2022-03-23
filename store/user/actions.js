import axios from 'axios'
export default {
    getDevs({commit}){
        return axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    commit("SET_DEVS",response.data)
                })
                .catch(error => console.log(error))
                .finally(() => console.log("terminou"))

    }
}