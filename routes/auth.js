const router = require('express').Router();
const AuthController = require('../controller');
const { apiHandler } = require("../utils/paylod");
const { auth } = require("../middelware");

/** Register Route */
router.post('/register', apiHandler(AuthController.register));

/** login route */
router.post('/login', apiHandler(AuthController.login));

/** OTP Route */
router.post('/verifynow', apiHandler(AuthController.verifyNow));

/** Change Password */
router.put('/changepassword', auth, apiHandler(AuthController.changePassword));

/** Register Company */
router.post('/create-company', auth, apiHandler(AuthController.createCompany));

/** Get Workspace List */
router.post('/workspace-list', auth, apiHandler(AuthController.getWorkspaceList));

router.post('/dashboard', auth, apiHandler(AuthController.getDashboard));

module.exports = router;