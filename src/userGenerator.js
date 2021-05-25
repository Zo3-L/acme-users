const faker = require('faker')

const generateUsers = ()=> {
    return users = new Array(50).fill('').map(a => faker.helpers.userCard())
}

module.exports = { generateUsers }