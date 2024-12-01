const controller = require("./controller");
const payload = require("./payload");

exports.register = {
    handler: controller.register,
    payload: payload.register
}

exports.login = {
    handler: controller.login,
    payload: payload.login
}

exports.verifyNow = {
    handler: controller.sendOTP,
    payload: validator.verifyNow
}

exports.changePassword = {
    handler: controller.changePassword,
    payload: validator.changePassword
}

exports.createCompany = {
    handler: controller.createCompany,
    payload: validator.createCompany,
}

exports.getWorkspaceList = {
    handler: controller.getWorkspaceList,
}

exports.getDashboard = {
    handler: controller.getDashboard,
}