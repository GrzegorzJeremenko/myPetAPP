const axios = require('axios')

function login(email, password) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: 'https://mypet-api.herokuapp.com/api/users/login',
            data: {
              email: email,
              password: password
            }
          })
          .then(function(res) {
            if (res.status === 200) {
              localStorage.setItem('user', JSON.stringify({ token: res.data.token, refresh_token: res.data.refresh_token }))
              resolve(res)
            }
          })
          .catch(function(err) { 
              localStorage.removeItem('user')
              reject(err)
           })
    })
}

function register(email, password) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: 'https://mypet-api.herokuapp.com/api/users/register',
            data: {
              email: email,
              password: password
            }
          })
          .then(function(res) {
            if (res.status === 200) {
              localStorage.setItem('user', JSON.stringify({ token: res.data.token, refresh_token: res.data.refresh_token }))
              resolve(res)
            }
          })
          .catch(function(err) { 
              localStorage.removeItem('user')
              reject(err)
           })
    })
}

function logout() {
    localStorage.removeItem('user')
}

export const authentication = {
    login,
    register,
    logout
}