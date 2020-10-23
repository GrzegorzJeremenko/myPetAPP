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
          .then((res) => {
            if (res.status === 200) {
              localStorage.setItem('user', JSON.stringify({ token: res.data.token, refresh_token: res.data.refresh_token }))
              resolve(res)
            }
          })
          .catch((err) => { 
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
          .then((res) => {
            if (res.status === 200) {
              localStorage.setItem('user', JSON.stringify({ token: res.data.token, refresh_token: res.data.refresh_token }))
              resolve(res)
            }
          })
          .catch((err) => { 
              localStorage.removeItem('user')
              reject(err)
           })
    })
}

function logout() {
    localStorage.removeItem('user')
}

function getPets(userId) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `https://mypet-api.herokuapp.com/api/users/${userId}/pets`,
            headers: authHeader()
        })
        .then((res) => {
            if (res.status === 200) {
                resolve(res)
            }

            reject()
        })
        .catch((err) => {
            reject(err)
        })
    })
}

function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'))

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token }
    } else {
        return {}
    }
}

export const authentication = {
    login,
    register,
    logout
}

export const user = {
    getPets
}