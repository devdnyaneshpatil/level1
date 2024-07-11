const { Users } = require("../../models")

const getUserByEmail = async (email) => {
    const user = await Users.findOne({
        where: {
            email
        }
    })
    return user
}

const createUser = async (payload) => {
    const user = await Users.create(payload)
    return user
}

module.exports={getUserByEmail,createUser}