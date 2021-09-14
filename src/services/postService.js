/* Con JSON SERVER
json-server --watch dbca.json -p 3011 -d 2000

function getPosts() {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3011/comments`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3011/comments`, {
            method: 'POST',
            body: JSON.stringify({
            name: post.name,
            email: post.email,
            message: post.message
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
        })
        .then(respuesta => respuesta.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}*/

// Con NodeJS-Express-PostreSQL
function getZones() {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3000/grupos`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

function getCountries() {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3000/paises`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

function getPosts() {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3000/comentarios`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3000/comentarios`, {
            method: 'POST',
            body: JSON.stringify({
            name: post.name,
            email: post.email,
            message: post.message
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
        })
        .then(respuesta => respuesta.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}

module.exports = {
    getZones,
    getCountries,
    createPost,
    getPosts,
}