const router = require('express').Router();
const usersRoutes = require('./users');
const loginRoute = require('./login');
const logoutRoute = require('./logout');
const groupRoute = require('./groups');
const courseRoute = require('./courses')

// login route for Users
router.use('/login', loginRoute);

// logout route for Users
router.use('/logout', logoutRoute);

// '/api/user' for all routes involving User Accounts
router.use('/user', usersRoutes);

router.use('/group', groupRoute);

router.use('/course', courseRoute);

// '/api' for any ongoing testing the root of /api route GOOD place for mounting middleware in router.use
router.get('/', (req, res) => {
  res.status(200).send('Succesful get to /api route');
});

module.exports = router;