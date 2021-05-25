const userGenerator = require('./userGenerator')
const render = require('./renderer')

const users = userGenerator.generateUsers()

console.log(users)

const userList = document.querySelector('#user-list')

render.render(users, userList)

window.addEventListener('hashchange', ()=> {
    const selected = window.location.hash.slice(1)*1
    render.render(users, userList, selected)
})