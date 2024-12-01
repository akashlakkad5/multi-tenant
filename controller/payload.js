const Joi = require('joi');

exports.register = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    country: Joi.string().required(),
}).options({allowUnknown: true});


exports.login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
}).options({stripUnknown: true});


exports.verifyNow = Joi.object({
    otp: Joi.string().optional(),
    user: Joi.string().required(),
}).options({stripUnknown: true});

exports.changePassword = Joi.object({
    password: Joi.string().required(),
    newPassword: Joi.string().required(),
}).options({stripUnknown: true});

exports.createCompany = Joi.object({
    name: Joi.string().required(),
    website: Joi.string().required(),
    contactInfo: Joi.any(),
    companyInfo: Joi.any(),
    companyId: Joi.string().required().lowercase().trim(),
}).options({ allowUnknown: true });