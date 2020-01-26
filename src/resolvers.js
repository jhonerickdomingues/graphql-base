const User = require('./User');

module.exports = {
    Query:{
        users: () => User.find(),
        user: (_, { id }) => User.findById(id),
    },

    Mutation:{
        createUser: (_, { name, email }) => User.create({ name, email }),
        updateUser: async (_, { id, name, email }) => {
            await User.updateOne({
                _id: id
            }, {
                name,
                email
            })

            return User.findById(id)
        }
    },
};
