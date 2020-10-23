const axios = require('axios')
import jwt_decode from 'jwt-decode'

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
                let decoded = jwt_decode(res.data.token)
                localStorage.setItem('user', JSON.stringify({ userId: decoded.userId, token: res.data.token, refresh_token: res.data.refresh_token }))
                resolve()
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

function changePassword(userId, old_password, new_password) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: `https://mypet-api.herokuapp.com/api/users/${userId}/change_password`,
            data: {
                old_password: old_password,
                new_password: new_password,
            },
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

function removeAccount(userId) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'delete',
            url: `https://mypet-api.herokuapp.com/api/users/${userId}`,
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

function getId() {
    if (!JSON.parse(localStorage.getItem('user')).userId) {
        logout()
        window.location.reload()
    }

    return JSON.parse(localStorage.getItem('user')).userId
}

export const authentication = {
    login,
    register,
    logout
}

export const user = {
    getPets,
    getId,
    changePassword,
    removeAccount
}