const axios = require('axios')
import jwt_decode from 'jwt-decode'

axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    if (error.response.status !== 401) {
        return Promise.reject(error)
    }

    if (error.config.url == "https://mypet-api.herokuapp.com/api/users/refresh_token") {
        logout()
        window.location.reload()
        return Promise.reject(error)
    }

    return new Promise((resolve, reject) => {
        const user = JSON.parse(localStorage.getItem('user'))
        axios({
            method: 'post',
            url: 'https://mypet-api.herokuapp.com/api/users/refresh_token',
            data: {
                token: user.token,
                refresh_token: user.refresh_token
            }
        })
        .then((res) => {
            localStorage.setItem('user', JSON.stringify({ userId: user.userId, token: res.data.new_token, refresh_token: res.data.new_refresh_token }))
            resolve(res.data.new_token)
        })
        .catch(err => {
            reject(err)
        })
    })
    .then(() => {
        window.location.reload()
    })
    .catch(err => {
        Promise.reject(err)
    })
})

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

function register(firstName, lastName, email, password) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: 'https://mypet-api.herokuapp.com/api/users/register',
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }
          })
          .then((res) => {
              if (res.status === 201) {
                login(email, password)
                  .then(() => resolve())
                  .catch((err) => reject(err))
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
        .catch((err) => reject(err))
    })
}

function addPet(userId, name, birthDate, code) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: `http://localhost:3000/api/users/${userId}/pets/add`,
            data: {
                name: name,
                birthDate: birthDate,
                code: code
            },
            headers: authHeader()
        })
        .then((res) => {
            if (res.status === 201) {
                resolve()
            }

            reject()
        })
        .catch(err => reject(err))
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
        .catch((err) => reject(err))
    })
}

function getData(userId) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `https://mypet-api.herokuapp.com/api/users/${userId}`,
            headers: authHeader()
        })
        .then((res) => {
            if (res.status === 200) {
                resolve(res)
            }

            reject()
        })
        .catch(err => reject(err))
    })
}

function getPetData(userId, petId) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `http://localhost:3000/api/users/${userId}/pets/${petId}`,
            headers: authHeader()
        })
        .then((res) => {
            if (res.status === 200) {
                resolve(res)
            }

            reject()
        })
        .catch((err) => reject(err))
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
        .catch((err) => reject(err))
    })
}

function getNotifications(userId) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `http://localhost:3000/api/users/${userId}/notifications`,
            headers: authHeader()
        })
        .then((res) => {
            if (res.status === 200) {
                resolve(res)
            }

            reject()
        })
        .catch((err) => reject(err))
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
    addPet,
    getPets,
    getId,
    getData,
    getPetData,
    getNotifications,
    changePassword,
    removeAccount
}