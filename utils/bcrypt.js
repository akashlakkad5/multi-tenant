const bcrypt = require("bcrypt");
/**
 * Hashes a password using bcrypt with a salt round of 10.
 *
 * @function hashPassword
 * @param {Object} params - The function parameters.
 * @param {string} params.password - The password to be hashed.
 * @returns {Promise<string>} - A promise that resolves with the hashed password.
 */
exports.hashPassword = ({password}) => {
    return bcrypt.hash(password , 10)
}

exports.comparePassword = ({password, hashPassword}) => {
    return bcrypt.compare(password, hashPassword)
}
